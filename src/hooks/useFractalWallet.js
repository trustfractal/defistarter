import React, { useContext, useState, useEffect, createContext } from "react"

export const FractalWalletContext = createContext(null)

function detectFractalInpageProvider() {
  let handled = false

  return new Promise(resolve => {
    if (window.Fractal) {
      handleInpageProvider()
    } else {
      window.addEventListener(
        "fractal-wallet#initialized",
        handleInpageProvider,
        { once: true }
      )

      setTimeout(() => {
        handleInpageProvider()
      }, 3000)
    }

    function handleInpageProvider() {
      if (handled) {
        return
      }
      handled = true

      window.removeEventListener(
        "fractal-wallet#initialized",
        handleInpageProvider
      )

      resolve(window.Fractal)
    }
  })
}

export const FractalWalletProvider = ({ children }) => {
  const [provider, setProvider] = useState()
  const [loading, setLoading] = useState(true)
  const [available, setAvailable] = useState(false)
  const [version, setVersion] = useState("")

  const loadWallet = async () => {
    try {
      // detect provider
      const provider = await detectFractalInpageProvider()

      if (provider === undefined) {
        return
      }

      // get wallet version
      const { version } = await provider.verifyConnection()
      setVersion(version)

      // set provider and as available
      setProvider(provider)
      setAvailable(true)

      console.log(`Connected to Fractal Wallet v${version}`)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadWallet()
  }, [])

  return (
    <FractalWalletContext.Provider
      value={{
        provider,
        available,
        version,
        loading,
      }}
    >
      {children}
    </FractalWalletContext.Provider>
  )
}

export const useFractalWallet = () => useContext(FractalWalletContext)

import React, { useContext, useState, useEffect, createContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

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

  const {
    site: {
      siteMetadata: { title: name, siteUrl: url },
    },
    image,
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
        image: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            gatsbyImageData(width: 36, height: 36)
          }
        }
      }
    `
  )

  const requester = {
    name,
    url,
    icon: `${url}/${getSrc(image)}`,
  }

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
        requester,
      }}
    >
      {children}
    </FractalWalletContext.Provider>
  )
}

export const useFractalWallet = () => useContext(FractalWalletContext)

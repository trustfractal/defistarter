import * as React from "react"
import styled from "styled-components"

import TopComponent from "../../components/TopComponent"
import Title from "../../components/Title"
import Text, { TextSizes, TextWeights } from "../../components/Text"
import Button from "../../components/Button"

import HeroDots from "../../assets/images/hero_dots.svg"

import { useFractalWallet } from "../../hooks/useFractalWallet"

const HeroSection = styled.section``
const HeroContainer = styled.div`
  margin-bottom: 100px;
  width: 30%;
`
const HeroDotsContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: -10;

  display: flex;
  justify-content: center;

  width: 100vw;
`

const TitleContainer = styled.div`
  margin-bottom: 29px;
`

const ButtonsContainer = styled.div``

const MainButtonContainer = styled.div`
  margin-bottom: 15px;
`

const SecundaryButtonContainer = styled.div`
  margin-bottom: 11px;
`

const WarningText = styled.div`
  color: var(--c-red);

  margin-top: 29px;
`

const Label = styled.div`
  width: 250px;
  background-color: var(--c-orange);
  color: var(--c-white);
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`

const Credential = styled.div`
  background-color: var(--c-lightest-pink);
  border: 1px solid var(--c-light-pink);
  border-radius: 5px;
  padding: 18px 14px;
  box-shadow: 0px 3px 3px #d197ff;
  width: 250px;
`

const CredentialEntry = styled.div`
  margin-bottom: 12px;
`

const CredentialEntryLabel = styled.div`
  color: var(--c-dark-pink);
  margin-bottom: 4px;
`
const CredentialEntryValue = styled.div`
  color: var(--c-black);
`

const formatLabel = label => label.split("_").join(" ").toLowerCase()

export default function Hero() {
  const { available, loading, requester, provider } = useFractalWallet()

  const [connected, setConnected] = React.useState(false)
  const [credentialNotFound, setCredentialNotFound] = React.useState(false)
  const [credentialDenied, setCredentialDenied] = React.useState(false)
  const [credential, setCredential] = React.useState()

  const isLoading = loading === true
  const isAvailable = !loading && available
  const isNotAvailable = !loading && !available
  const isNotConnected = !isNotAvailable && !connected
  const hasCredential = credential !== undefined

  const onClickConnectWallet = React.useCallback(() => {
    provider
      .setupPlugin()
      .then(() => {
        setConnected(true)
      })
      .catch(() => {
        // ignore
        setConnected(false)
      })
    return
  }, [provider])

  const onClickCredential = React.useCallback(() => {
    // reset errors
    setCredentialNotFound(false)
    setCredentialDenied(false)

    const fields = {}

    const level = "plus+liveness+wallet"

    provider
      .getVerificationRequest(level, requester, fields)
      .then(({ credential }) => {
        setCredential({
          ...credential.properties,
          country_of_issuance: credential.countryOfIDIssuance,
          country_of_residence: credential.countryOfResidence,
        })
      })
      .catch(({ errorCode }) => {
        // ignore
        if (errorCode === 5004) {
          setCredentialNotFound(true)
        }
        if (errorCode === 5002) {
          setCredentialDenied(true)
        }
      })
  }, [provider, requester])

  const onClickCredentialPlusCountries = React.useCallback(() => {
    const fields = {
      identification_document_country: true,
      residential_address_country: true,
    }

    const level = "plus+liveness+wallet"

    provider
      .getVerificationRequest(level, requester, fields)
      .then(({ credential }) => {
        setCredential({
          ...credential.properties,
        })
      })
      .catch(({ errorCode }) => {
        // ignore
        if (errorCode === 5004) {
          setCredentialNotFound(true)
        }
        if (errorCode === 5002) {
          setCredentialDenied(true)
        }
      })
  }, [provider, requester])

  const onClickCredentialPlusCountriesPlusName = React.useCallback(() => {
    // reset errors
    setCredentialNotFound(false)
    setCredentialDenied(false)

    const fields = {
      identification_document_country: true,
      residential_address_country: true,
      full_name: true,
    }

    const level = "plus+liveness+wallet"

    provider
      .getVerificationRequest(level, requester, fields)
      .then(({ credential }) => {
        setCredential({
          ...credential.properties,
        })
      })
      .catch(({ errorCode }) => {
        // ignore
        if (errorCode === 5004) {
          setCredentialNotFound(true)
        }
        if (errorCode === 5002) {
          setCredentialDenied(true)
        }
      })
  }, [provider, requester])

  const verifyWalletConnection = React.useCallback(async () => {
    const { registered, locked, setup } = await provider.verifyConnection()

    setConnected(registered && setup && !locked)

    onClickConnectWallet()
  }, [provider, onClickConnectWallet])

  React.useEffect(() => {
    if (available) {
      verifyWalletConnection()
    }
  }, [available, verifyWalletConnection])

  return (
    <HeroSection>
      <HeroDotsContainer>
        <HeroDots />
      </HeroDotsContainer>
      <TopComponent>
        <HeroContainer>
          <TitleContainer>
            <Title>Cross-chain crowdfunding platform</Title>
          </TitleContainer>
          <ButtonsContainer>
            <MainButtonContainer>
              {!connected && (
                <Button
                  loading={isLoading}
                  disabled={isNotAvailable}
                  onClick={onClickConnectWallet}
                >
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    Connect your Fractal Wallet
                  </Text>
                </Button>
              )}
              {connected && (
                <Label>
                  <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                    Fractal Wallet connected
                  </Text>
                </Label>
              )}
            </MainButtonContainer>
            {hasCredential && (
              <Credential>
                {Object.keys(credential).map(key => (
                  <CredentialEntry key={key}>
                    <CredentialEntryLabel>
                      <Text size={TextSizes.EXTRA_EXTRA_SMALL}>
                        {formatLabel(key)}
                      </Text>
                    </CredentialEntryLabel>
                    <CredentialEntryValue>
                      <Text size={TextSizes.EXTRA_SMALL}>
                        {credential[key]}
                      </Text>
                    </CredentialEntryValue>
                  </CredentialEntry>
                ))}
              </Credential>
            )}
            {!hasCredential && isAvailable && (
              <>
                <SecundaryButtonContainer>
                  <Button
                    alt
                    disabled={isNotConnected || credentialNotFound}
                    onClick={onClickCredential}
                  >
                    <Text
                      size={TextSizes.EXTRA_EXTRA_SMALL}
                      weight={TextWeights.BOLD}
                    >
                      Credential only
                    </Text>
                  </Button>
                </SecundaryButtonContainer>
                <SecundaryButtonContainer>
                  <Button
                    alt
                    disabled={isNotConnected || credentialNotFound}
                    onClick={onClickCredentialPlusCountries}
                  >
                    <Text
                      size={TextSizes.EXTRA_EXTRA_SMALL}
                      weight={TextWeights.BOLD}
                    >
                      Credential + Countries
                    </Text>
                  </Button>
                </SecundaryButtonContainer>
                <SecundaryButtonContainer>
                  <Button
                    alt
                    disabled={isNotConnected || credentialNotFound}
                    onClick={onClickCredentialPlusCountriesPlusName}
                  >
                    <Text
                      size={TextSizes.EXTRA_EXTRA_SMALL}
                      weight={TextWeights.BOLD}
                    >
                      Credential + Countries + Name
                    </Text>
                  </Button>
                </SecundaryButtonContainer>
              </>
            )}
            {isNotAvailable && (
              <WarningText>
                <Text size={TextSizes.EXTRA_SMALL}>
                  Fractal Wallet is not installed.
                </Text>
                <Text size={TextSizes.EXTRA_SMALL}>
                  Please install it from{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://chrome.google.com/webstore/detail/fractal-id-wallet/agechnindjilpccclelhlbjphbgnobpf?hl=pt-PT"
                  >
                    here
                  </a>
                  .
                </Text>
              </WarningText>
            )}
            {credentialDenied && (
              <WarningText>
                <Text size={TextSizes.EXTRA_SMALL}>
                  Request for credential denied
                </Text>
              </WarningText>
            )}
            {credentialNotFound && (
              <WarningText>
                <Text size={TextSizes.EXTRA_SMALL}>
                  You don't have a credential `plus+liveness+wallet` yet.
                </Text>
                <Text size={TextSizes.EXTRA_SMALL}>
                  Go to get one from{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://fractal.id/authorize?client_id=ImCQ0UXUjRzkhG7nMSZZNV-5WA3J_CuGENBfhr8DmEE&redirect_uri=https%3A%2F%2Ffractal.id%2F&response_type=code&scope=contact%3Aread%20verification.plus%3Aread%20verification.plus.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread%20verification.wallet%3Aread%20verification.wallet.details%3Aread"
                  >
                    Fractal ID
                  </a>
                  .
                </Text>
              </WarningText>
            )}
          </ButtonsContainer>
        </HeroContainer>
      </TopComponent>
    </HeroSection>
  )
}

Hero.propTypes = {}

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

export default function Hero() {
  const { available, loading } = useFractalWallet()

  const isLoading = loading === true
  const isAvailable = !loading && available
  const isNotAvailable = !loading && !available

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
              <Button loading={isLoading} disabled={isNotAvailable}>
                <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                  Connect your Fractal Wallet
                </Text>
              </Button>
            </MainButtonContainer>
            {isAvailable && (
              <>
                <SecundaryButtonContainer>
                  <Button alt disabled={isNotAvailable}>
                    <Text
                      size={TextSizes.EXTRA_EXTRA_SMALL}
                      weight={TextWeights.BOLD}
                    >
                      Credential only
                    </Text>
                  </Button>
                </SecundaryButtonContainer>
                <SecundaryButtonContainer>
                  <Button alt disabled={isNotAvailable}>
                    <Text
                      size={TextSizes.EXTRA_EXTRA_SMALL}
                      weight={TextWeights.BOLD}
                    >
                      Credential + Countries
                    </Text>
                  </Button>
                </SecundaryButtonContainer>
                <SecundaryButtonContainer>
                  <Button alt disabled={isNotAvailable}>
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
                <Text size={TextSizes.EXTRA_EXTRA_SMALL}>
                  Fractal Wallet is not installed. Please install it from{" "}
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
          </ButtonsContainer>
        </HeroContainer>
      </TopComponent>
    </HeroSection>
  )
}

Hero.propTypes = {}

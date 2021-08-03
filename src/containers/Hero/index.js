import * as React from "react"
import styled from "styled-components"

import TopComponent from "../../components/TopComponent"
import Title from "../../components/Title"
import Text, { TextSizes, TextWeights } from "../../components/Text"
import Button from "../../components/Button"

import HeroDots from "../../assets/images/hero_dots.svg"

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

export default function Hero() {
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
              <Button>
                <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
                  Connect your Fractal Wallet
                </Text>
              </Button>
            </MainButtonContainer>
            <SecundaryButtonContainer>
              <Button alt>
                <Text
                  size={TextSizes.EXTRA_EXTRA_SMALL}
                  weight={TextWeights.BOLD}
                >
                  Credential only
                </Text>
              </Button>
            </SecundaryButtonContainer>
            <SecundaryButtonContainer>
              <Button alt>
                <Text
                  size={TextSizes.EXTRA_EXTRA_SMALL}
                  weight={TextWeights.BOLD}
                >
                  Credential + Countries
                </Text>
              </Button>
            </SecundaryButtonContainer>
            <SecundaryButtonContainer>
              <Button alt>
                <Text
                  size={TextSizes.EXTRA_EXTRA_SMALL}
                  weight={TextWeights.BOLD}
                >
                  Credential + Countries + Name
                </Text>
              </Button>
            </SecundaryButtonContainer>
          </ButtonsContainer>
        </HeroContainer>
      </TopComponent>
    </HeroSection>
  )
}

Hero.propTypes = {}

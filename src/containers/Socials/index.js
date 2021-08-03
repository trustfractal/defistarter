import * as React from "react"
import styled from "styled-components"

import TopComponent from "../../components/TopComponent"
import Subtitle from "../../components/Subtitle"
import Text, { TextSizes, TextWeights } from "../../components/Text"
import Button from "../../components/Button"
import { IconNames } from "../../components/Icon"

const SocialsSection = styled.section``
const SocialsContainer = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 69px;
`

const TitleContainer = styled.div`
  margin-bottom: 69px;
  text-align: center;
`

const TextContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export default function Socials() {
  return (
    <SocialsSection>
      <TopComponent>
        <SocialsContainer>
          <TitleContainer>
            <Subtitle>We are a global community</Subtitle>
          </TitleContainer>
          <TextContainer>
            <Text size={TextSizes.EXTRA_LARGE}>
              Learn more about us, talk with others in the community and
              participate in creating the future
            </Text>
          </TextContainer>
          <ButtonsContainer>
            <Button leftIcon={IconNames.TELEGRAM} height="60px">
              <Text size={TextSizes.SMALL} weight={TextWeights.BOLD}>
                Telegram
              </Text>
            </Button>
            <Button leftIcon={IconNames.TWITTER} height="60px">
              <Text size={TextSizes.SMALL} weight={TextWeights.BOLD}>
                Twitter
              </Text>
            </Button>
            <Button leftIcon={IconNames.DISCORD} height="60px">
              <Text size={TextSizes.SMALL} weight={TextWeights.BOLD}>
                Discord
              </Text>
            </Button>
            <Button leftIcon={IconNames.REDDIT} height="60px">
              <Text size={TextSizes.SMALL} weight={TextWeights.BOLD}>
                Reddit
              </Text>
            </Button>
          </ButtonsContainer>
        </SocialsContainer>
      </TopComponent>
    </SocialsSection>
  )
}

Socials.propTypes = {}

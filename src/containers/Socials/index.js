import * as React from "react"
import styled from "styled-components"

import Subtitle from "../../components/Subtitle"
import Text, { TextSizes, TextWeights } from "../../components/Text"
import Button from "../../components/Button"
import { IconNames } from "../../components/Icon"

const SocialsContainer = styled.div``

export default function Socials() {
  return (
    <SocialsContainer>
      <Subtitle>We are a global community</Subtitle>
      <Text>
        Learn more about us, talk with others in the community and participate
        in creating the future
      </Text>
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
    </SocialsContainer>
  )
}

Socials.propTypes = {}

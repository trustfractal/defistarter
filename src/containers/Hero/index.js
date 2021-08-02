import * as React from "react"
import styled from "styled-components"

import Title from "../../components/Title"
import Text, { TextSizes, TextWeights } from "../../components/Text"
import Button from "../../components/Button"

const HeroContainer = styled.div``

export default function Hero() {
  return (
    <HeroContainer>
      <Title>Cross-chain crowdfunding platform</Title>
      <Button>
        <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
          Connect your Fractal Wallet
        </Text>
      </Button>
      <Button alt>
        <Text size={TextSizes.EXTRA_EXTRA_SMALL} weight={TextWeights.BOLD}>
          Credential only
        </Text>
      </Button>
      <Button alt>
        <Text size={TextSizes.EXTRA_EXTRA_SMALL} weight={TextWeights.BOLD}>
          Credential + Countries
        </Text>
      </Button>
      <Button alt>
        <Text size={TextSizes.EXTRA_EXTRA_SMALL} weight={TextWeights.BOLD}>
          Credential + Countries + Name
        </Text>
      </Button>
    </HeroContainer>
  )
}

Hero.propTypes = {}

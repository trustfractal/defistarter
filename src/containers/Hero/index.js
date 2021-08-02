import * as React from "react"
import styled from "styled-components"

import Title from "../../components/Title"
import Text, { TextSizes } from "../../components/Text"
import Button from "../../components/Button"

const HeroContainer = styled.div``

export default function Hero() {
  return (
    <HeroContainer>
      <Title>Cross-chain crowdfunding platform</Title>
      <Button>
        <Text size={TextSizes.EXTRA_SMALL}>Connect your Fractal Wallet</Text>
      </Button>
    </HeroContainer>
  )
}

Hero.propTypes = {}

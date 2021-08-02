import * as React from "react"
import styled from "styled-components"

import Subtitle from "../../components/Subtitle"
import Text, { TextSizes, TextWeights } from "../../components/Text"

const HeaderContainer = styled.div``

export default function Header() {
  return (
    <HeaderContainer>
      <Subtitle>Defistarter</Subtitle>
      <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
        home
      </Text>
      <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
        products
      </Text>
      <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
        our team
      </Text>
      <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
        contact us
      </Text>
    </HeaderContainer>
  )
}

Header.propTypes = {}

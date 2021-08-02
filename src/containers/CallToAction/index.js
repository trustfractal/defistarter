import * as React from "react"
import styled from "styled-components"

import Button from "../../components/Button"
import Input from "../../components/Input"
import Subtitle from "../../components/Subtitle"
import Text, { TextSizes, TextWeights } from "../../components/Text"

const CallToActionContainer = styled.div``

export default function CallToAction() {
  return (
    <CallToActionContainer>
      <Subtitle>Stay updated to the latest news</Subtitle>
      <Input type="email" placeholder="Enter your email adress here" />
      <Button height="50px">
        <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
          Sign Up
        </Text>
      </Button>
    </CallToActionContainer>
  )
}

CallToAction.propTypes = {}

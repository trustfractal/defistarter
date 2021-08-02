import * as React from "react"
import styled from "styled-components"

import Subtitle from "../../components/Subtitle"
import Text from "../../components/Text"
import Button from "../../components/Button"

const CallToActionContainer = styled.div``

export default function CallToAction() {
  return (
    <CallToActionContainer>
      <Subtitle>Stay updated to the latest news</Subtitle>
      <Button>
        <Text>Enter your email adress here</Text>
      </Button>
      <Button>
        <Text>Sign Up</Text>
      </Button>
    </CallToActionContainer>
  )
}

CallToAction.propTypes = {}

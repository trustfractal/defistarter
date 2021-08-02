import * as React from "react"
import styled from "styled-components"

import Subtitle from "../../components/Subtitle"
import Text, { TextSizes, TextWeights } from "../../components/Text"
import Button from "../../components/Button"

const AboutContainer = styled.div``

export default function About() {
  return (
    <AboutContainer>
      <Subtitle>About Defistarter</Subtitle>
      <Text>
        Defistarter is a fully functional ecosystem built to enable projects to
        raise capital on a decentralized environment and connect investors with
        promising projects from their earliest stages
      </Text>
      <Button>
        <Text size={TextSizes.SMALL} weight={TextWeights.BOLD}>
          Learn more
        </Text>
      </Button>
    </AboutContainer>
  )
}

About.propTypes = {}

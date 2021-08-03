import * as React from "react"
import styled from "styled-components"

import Subtitle from "../../components/Subtitle"
import Text, { TextSizes, TextWeights } from "../../components/Text"
import Button from "../../components/Button"
import TopComponent from "../../components/TopComponent"

const AboutSection = styled.section``
const AboutContainer = styled.div`
  margin-bottom: 10px;
`

const TitleContainer = styled.div`
  margin-bottom: 30px;
`

const TextContainer = styled.div`
  margin-bottom: 24px;
`
const ButtonContainer = styled.div``

export default function About() {
  return (
    <AboutSection>
      <TopComponent>
        <AboutContainer>
          <TitleContainer>
            <Subtitle>About Defistarter</Subtitle>
          </TitleContainer>
          <TextContainer>
            <Text size={TextSizes.EXTRA_LARGE}>
              Defistarter is a fully functional ecosystem built to enable
              projects to raise capital on a decentralized environment and
              connect investors with promising projects from their earliest
              stages
            </Text>
          </TextContainer>
          <ButtonContainer>
            <Button>
              <Text size={TextSizes.SMALL} weight={TextWeights.BOLD}>
                Learn more
              </Text>
            </Button>
          </ButtonContainer>
        </AboutContainer>
      </TopComponent>
    </AboutSection>
  )
}

About.propTypes = {}

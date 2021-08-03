import * as React from "react"
import styled from "styled-components"

import Button from "../../components/Button"
import Input from "../../components/Input"
import Subtitle from "../../components/Subtitle"
import Text, { TextSizes, TextWeights } from "../../components/Text"
import TopComponent from "../../components/TopComponent"

const CallToActionSection = styled.section``
const CallToActionContainer = styled.div`
  margin-bottom: 146px;
`

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 86px;
`

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonContainer = styled.div`
  margin-left: 67px;
`

export default function CallToAction() {
  return (
    <CallToActionSection>
      <TopComponent>
        <CallToActionContainer>
          <TitleContainer>
            <Subtitle>Stay updated to the latest news</Subtitle>
          </TitleContainer>
          <ActionsContainer>
            <Input type="email" placeholder="Enter your email adress here" />
            <ButtonContainer>
              <Button height="50px">
                <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
                  Sign Up
                </Text>
              </Button>
            </ButtonContainer>
          </ActionsContainer>
        </CallToActionContainer>
      </TopComponent>
    </CallToActionSection>
  )
}

CallToAction.propTypes = {}

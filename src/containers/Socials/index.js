import * as React from "react"
import styled from "styled-components"

import Subtitle from "../../components/Subtitle"
import Text, { TextSizes } from "../../components/Text"
import Button from "../../components/Button"

const SocialsContainer = styled.div``

export default function Socials() {
  return (
    <SocialsContainer>
      <Subtitle>We are a global community</Subtitle>
      <Text>
        Learn more about us, talk with others in the community and participate
        in creating the future
      </Text>
      <Button>
        <Text size={TextSizes.EXTRA_SMALL}>Telegram</Text>
      </Button>
      <Button>
        <Text size={TextSizes.EXTRA_SMALL}>Twitter</Text>
      </Button>
      <Button>
        <Text size={TextSizes.EXTRA_SMALL}>Discord</Text>
      </Button>
      <Button>
        <Text size={TextSizes.EXTRA_SMALL}>Reddit</Text>
      </Button>
    </SocialsContainer>
  )
}

Socials.propTypes = {}

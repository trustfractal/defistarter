import * as React from "react"
import styled from "styled-components"

import Text, { TextSizes, TextWeights } from "../../components/Text"

const FooterContainer = styled.div``

export default function Footer() {
  return (
    <FooterContainer>
      <Text weight={TextWeights.BOLD}>QUICK LINKS</Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        Home
      </Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        What we do
      </Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        News
      </Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        Contact
      </Text>
      <Text weight={TextWeights.BOLD}>SUPPORT</Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        Help center
      </Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        Discussions
      </Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        Contact
      </Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        Blog
      </Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        FAQ
      </Text>
      <Text weight={TextWeights.BOLD}>ABOUT DEFISTARTER</Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        1337 Stallman Drive Muh Freedomsville, 3141592
      </Text>
      <Text size={TextSizes.EXTRA_SMALL} weight={TextWeights.BOLD}>
        E: julio@frctls.com T: 0800 420 420 420
      </Text>
    </FooterContainer>
  )
}

Footer.propTypes = {}

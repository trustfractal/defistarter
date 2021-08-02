import * as React from "react"
import styled from "styled-components"

import Subtitle from "../../components/Subtitle"
import Text, { TextSizes, TextWeights } from "../../components/Text"
import Image, { ImageNames } from "../../components/Image"

const NewsContainer = styled.div``

export default function News() {
  return (
    <NewsContainer>
      <Subtitle>In the news</Subtitle>
      <Image name={ImageNames.EXPLORING_BLOCKCHAIN} />
      <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
        Exploring blockchain technology
      </Text>
      <Text size={TextSizes.SMALL}>
        This article will discuss the critical terminologies of blockchain
        technology
      </Text>
      <Image name={ImageNames.BLOCKCHAIN_INDUSTRY} />
      <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
        Blockchain Industry News
      </Text>
      <Text size={TextSizes.SMALL}>
        Stay tuned to blockchain news, industry analysis and in-depth articles
      </Text>
      <Image name={ImageNames.CRYPTO_TODAY} />
      <Text size={TextSizes.LARGE} weight={TextWeights.BOLD}>
        Crypto world today
      </Text>
      <Text size={TextSizes.SMALL}>
        Latest cryptocurrency news, updates, values, price predictions, and more
      </Text>
    </NewsContainer>
  )
}

News.propTypes = {}

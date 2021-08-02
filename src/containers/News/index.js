import * as React from "react"
import styled from "styled-components"

import Subtitle from "../../components/Subtitle"
import Text from "../../components/Text"

const NewsContainer = styled.div``

export default function News() {
  return (
    <NewsContainer>
      <Subtitle>In the news</Subtitle>
      <Text>Exploring blockchain technology</Text>
      <Text>
        This article will discuss the critical terminologies of blockchain
        technology
      </Text>
      <Text>Blockchain Industry News</Text>
      <Text>
        Stay tuned to blockchain news, industry analysis and in-depth articles
      </Text>
      <Text>Crypto world today</Text>
      <Text>
        Latest cryptocurrency news, updates, values, price predictions, and more
      </Text>
    </NewsContainer>
  )
}

News.propTypes = {}

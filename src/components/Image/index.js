import * as React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RootContainer = styled.div`
  ${props =>
    props.clickable &&
    css`
      cursor: pointer;
    `}
`

export const ImageNames = {
  BLOCKCHAIN_INDUSTRY: "blockchain_industry",
  CRYPTO_TODAY: "crypto_today",
  EXPLORING_BLOCKCHAIN: "exploring_blockchain",
}

Image.propTypes = {
  name: PropTypes.oneOf(Object.values(ImageNames)),
  clickable: PropTypes.bool,
}

Image.defaultProps = {
  clickable: false,
}

function Image(props) {
  const { data, name, clickable, onClick } = props

  const image = getImage(data[name])

  return (
    <RootContainer clickable={clickable} onClick={onClick}>
      <GatsbyImage image={image} alt={name} />
    </RootContainer>
  )
}

export default function QueryImage(props) {
  return (
    <StaticQuery
      query={imagesQuery}
      render={data => <Image {...props} data={data} />}
    />
  )
}

const imagesQuery = graphql`
  query {
    blockchain_industry: file(relativePath: { eq: "blockchain_industry.png" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    crypto_today: file(relativePath: { eq: "crypto_today.png" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    exploring_blockchain: file(
      relativePath: { eq: "exploring_blockchain.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
  }
`

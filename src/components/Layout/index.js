import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Head from "../Head"

import GlobalStyle from "./styles/GlobalStyle"

const LayoutContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;

  overflow: hidden;
`

const LayoutContent = styled.div`
  max-width: 1440px;

  margin: 0 auto;
  padding: 103px 102px 120px 122px;
`

export default function Layout(props) {
  const { children } = props

  return (
    <>
      <GlobalStyle />
      <Head />
      <LayoutContainer className="Layout">
        <LayoutContent className="Layout-content">{children}</LayoutContent>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  title: PropTypes.string,
}

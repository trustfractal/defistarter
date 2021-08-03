import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Head from "../Head"

import GlobalStyle from "./styles/GlobalStyle"
import GlobalFonts from "./fonts/GlobalFonts"

import { FractalWalletProvider } from "../../hooks/useFractalWallet"

const LayoutContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;

  overflow: hidden;
`

export default function Layout(props) {
  const { children } = props

  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Head />
      <FractalWalletProvider>
        <LayoutContainer className="Layout">{children}</LayoutContainer>
      </FractalWalletProvider>
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

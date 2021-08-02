import { createGlobalStyle } from "styled-components"

import ResetStyle from "./ResetStyle"
import NormalizeStyle from "./NormalizeStyle"

export const GlobalStyle = createGlobalStyle`
  ${ResetStyle}
  ${NormalizeStyle}
  :root {
    --c-white: #ffffff;
    --c-black: #000000;
    --c-light-pink: rgba(209, 151, 255, 0.74);
    --c-pink: #d197ff;
    --c-dark-pink: #cc8bff;
  }

  html {
    background-color: var(--c-white);
    color: var(--c-black);
  }

  html,
  body {
    font-family: Nexa, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
`

export default GlobalStyle

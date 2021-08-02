import { css, createGlobalStyle } from "styled-components"

import { reset } from "./ResetStyle"
import { normalize } from "./NormalizeStyle"

export const global = css`
  ${reset}
  ${normalize}
  :root {
    --c-white: #ffffff;
    --c-black: #000000;
    --c-pink: #d197ff;
    --c-dark-pink: #cc8bff;
  }

  html {
    background-color: var(--c-white);
    color: var(--c-black);
  }

  html,
  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`

const Global = createGlobalStyle`${global}`

export default Global

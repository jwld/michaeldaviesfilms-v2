import { createGlobalStyle, css } from 'styled-components'

const globalStyle = css`
  * {
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;

    :focus {
      outline: none;
    }
  }

  html {
    font-size: 62.5%;
  }
`

export default createGlobalStyle`${globalStyle}`

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    background-color: #000;
  }

  body {
    padding-top: 50px;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: unset;
  }
`


export default GlobalStyle
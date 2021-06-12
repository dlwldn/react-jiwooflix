import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    background-color: #000;
  }

  body {
    color: #fff;
  }

  a {
    text-decoration: none;
    color: unset;
  }
`


export default GlobalStyle
import React from 'react';
import { render } from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@layouts/App';

render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
  document.querySelector('#root')
);
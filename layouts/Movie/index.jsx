import React from 'react';
import styled from 'styled-components';

import Header from '@components/Header';

const Wrapper = styled.div`
  width: 100%;
`

const Movie = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

export default Movie;
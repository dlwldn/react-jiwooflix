import React from 'react';
import { Wrapper, MainWrap } from './style';

import Header from '@components/Header';

const Container = ({ children }) => {
  return (
    <Wrapper>
      <Header className="header"/>
      <MainWrap>
        {children}
      </MainWrap>
    </Wrapper>
  )
}

export default Container;
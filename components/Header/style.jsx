import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 25px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: rgb(0 0 0 / 80%) 0px 1px 5px 2px;
  display: flex;
  align-items: center;
  z-index: 50;

  & > h1 {
    font-size: 1.2rem;
    color: rgb(231, 76, 60);
    margin-right: 25px;
  }

  & > ul {
    display: flex;
    height: 100%;

    & > li {
      height: 100%;
      width: 80px;
      height: 100%;
      font-size: 0.9rem;

      & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
  }
`
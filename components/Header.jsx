import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: rgb(0 0 0 / 80%) 0px 1px 5px 2px;
  display: flex;
  align-items: center;

  & > h1 {
    font-size: 1.2rem;
    color: rgb(231, 76, 60);
    margin-right: 25px;
  }

  & > ul {
    display: flex;
    height: 100%;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 80px;
      height: 100%;
      font-size: 0.9rem;
    }
  }
`

const Header = () => {
  return (
    <HeaderWrap>
      <h1>
        <Link to="/">
          JiwooFlix
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/movie">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/tv">
            TV
          </Link>
        </li>
        <li>
          <Link to="/search">
            Search
          </Link>
        </li>
      </ul>
    </HeaderWrap>
  )
}

export default Header
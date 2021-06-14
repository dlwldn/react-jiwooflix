import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap } from './style';

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
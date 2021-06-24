import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderWrap } from './style';

const Header = () => {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const activeStyle = {
    borderBottom: '2px solid yellow'
  }

  useEffect(()=> {
    window.addEventListener('scroll', scrollControl);

    return () => {
      window.removeEventListener('scroll', scrollControl);
    }
  }, [])

  const scrollControl = () => {
    if(window.scrollY === 0) {
      setIsScrollTop(true);
    } else {
      setIsScrollTop(false);
    }
  }

  return (
    <HeaderWrap scroll={isScrollTop}>
      <h1>
        <Link to="/">
          JiwooFlix
        </Link>
      </h1>

      <ul>
        <li>
          <NavLink to="/movie" activeStyle={activeStyle}>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/tv" activeStyle={activeStyle}>
            TV
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeStyle={activeStyle}>
            Search
          </NavLink>
        </li>
      </ul>
    </HeaderWrap>
  )
}

export default Header
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap } from './style';

const Header = () => {
  const [isScrollTop, setIsScrollTop] = useState(true);

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
import styled from 'styled-components';

export const MovieListItemWrap = styled.li`
  & > a {
    display: block;
    width: 100%;
    height: 100%;
  }

  & > a > div:nth-child(1) {
    position: relative;
    margin-bottom: 10px;

    &:hover .hover-wrap {
      background-color: rgba( 0, 0, 0, 0.7 );
      opacity: 1;
    }

    & > img {
      width: 100%;
      min-height: 302px;
    }
  }
`

export const ListInfoWrap = styled.div`
  & > h3 {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  & > span {
    font-size: 0.9rem;
    color: rgb(170, 170, 170);
  }
`

export const HoverWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba( 0, 0, 0, 0 );
  opacity: 0;
  transition: 0.3s;
  padding: 10px;

  & > span {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  & > div {
    & > h3 {
      font-size: 1.2rem;
      margin-bottom: 3px;
    }
    
    & > span {
      color: #777;
      font-size: 0.9rem;
    }
  }
`
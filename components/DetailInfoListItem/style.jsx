import styled from 'styled-components';

export const DetailListItemWrap = styled.li`
  display: block;
  width: 100%;
  height: 100%;

  & > div:nth-child(1) {
    position: relative;
    margin-bottom: 10px;

    & > img {
      width: 100%;
      min-height: 302px;
      background-color: rgb(57, 62, 70);
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
import styled from 'styled-components';

export const MovieListWrap = styled.div`
  margin-bottom: 50px;

  & > h2 {
    margin-bottom: 25px;
  }

  & > ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 15px;
  }
`
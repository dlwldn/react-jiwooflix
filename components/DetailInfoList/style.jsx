import styled from 'styled-components';

export const DetailInfoListWrap = styled.div`
  margin-bottom: 50px;

  & > h2 {
    font-size: 1.5rem;
    margin-bottom: 25px;
  }

  & > ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 15px;
  }
`
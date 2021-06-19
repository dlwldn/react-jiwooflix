import styled from 'styled-components';

export const DetailWrap = styled.div`
  width: 100%;
  padding: 25px;
`

export const BackPosterImage = styled.div`
  background-image: ${props => props.url ? `url(${props.url})` : null} ;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(5px) opacity(70%) brightness(50%);
  z-index: -1;
`

export const DetailInfoWrap = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 50px;
  margin-bottom: 100px;

  & > img {
    width: 100%;
    height: auto;
  }
`

export const DetailInfoTextWrap = styled.div`
  & > h2 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 15px;
  }

  & > div:nth-child(2) {
    margin-bottom: 20px;

    & > span {
      color: rgb(204, 204, 204);
      margin-right: 10px;
    }
  }

  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 20px;

    & > span {
      background-color: rgb(57, 62, 70);
      padding: 5px 10px;
      border-radius: 5px;
      margin-right: 10px;
    }
  }

  & > div:nth-child(4) {
    font-size: 1.5rem;
    font-weight: 700;
    color: rgb(253, 219, 58);
    margin-bottom: 40px;
  }

  & > p {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`
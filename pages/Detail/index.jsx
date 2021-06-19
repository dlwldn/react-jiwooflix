import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom'
import { DetailWrap, BackPosterImage, DetailInfoWrap, DetailInfoTextWrap } from './style';

import { API_KEY, IMAGE_BASE_URL } from '@utils/requests';
import fetcher from '@utils/fetcher';
import Container from '@layouts/Container';
import Loading from '@components/Loading';

const Detail = () => {
  const { id } = useParams();
  const { location } = useHistory();
  const [detailData, setDetailData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=> {
    const targetCategory = location.pathname.split("/")[1];
    setIsLoading(true);
    
    fetcher.get(`/${targetCategory}/${id}?api_key=${API_KEY}&language=ko`)
    .then((res)=> {
      console.log(res);
      setDetailData(res.data);
      setIsLoading(false);
    })
    .catch((err)=> {
      console.log(err);
    })
  }, [])

  if(isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return (
    <Container>
      <DetailWrap>
        <BackPosterImage url={`${IMAGE_BASE_URL}${detailData?.backdrop_path}`} />
        <DetailInfoWrap>
          <img src={`${IMAGE_BASE_URL}${detailData?.poster_path}`} alt="" />
          <DetailInfoTextWrap>
            <h2>{detailData.title}</h2>
            <div>
              <span>{detailData.release_date} 개봉 |</span>
              <span>{detailData.runtime}분 |</span>
              <span></span>
            </div>

            <div>
              {detailData.genres.map((item)=> {
                return (
                  <span key={item.id}>{item.name}</span>
                )
              })}
            </div>

            <div>
              <span>평점 : {detailData.vote_average} / 10</span>
            </div>
            
            <p>{detailData.overview}</p>
          </DetailInfoTextWrap>
        </DetailInfoWrap>

        <div>
          컴포넌트들
        </div>

      </DetailWrap>
    </Container>
  )
}

export default Detail;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import requests from '@utils/requests';
import fetcher from '@utils/fetcher';
import Container from '@layouts/Container';
import MovieList from '@components/MovieList';
import Loading from '@components/Loading';

const Movie = () => {
  const [movieDataList, setMovieDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    setIsLoading(true);
    axios.all(
      [fetcher.get(requests.fetchNowPlayingMovies), 
       fetcher.get(requests.fetchPopularMovies), 
       fetcher.get(requests.fetchTopRatedMovies), 
       fetcher.get(requests.fetchUpComingMovies)]
    )
    .then(
      axios.spread((res1, res2, res3, res4)=> {
        const res1Data = {title: "현재 상영중" , movieData: res1.data.results};
        const res2Data = {title: "가장 인기있는" , movieData: res2.data.results};
        const res3Data = {title: "최고 평점" , movieData: res3.data.results};
        const res4Data = {title: "개봉 예정" , movieData: res4.data.results};
        setMovieDataList([res1Data, res2Data, res3Data, res4Data]);
        setIsLoading(false);
      })
    )
    .catch((err)=>{
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
      {movieDataList.map((item, index)=> {
        return (
          <MovieList key={index} category={item.title} movieData={item.movieData}/>
        )
      })}
    </Container>
  )
}

export default Movie;
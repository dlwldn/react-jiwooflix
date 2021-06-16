import React, { useState, useEffect } from 'react';
import axios from 'axios';

import requests from '@utils/requests';
import fetcher from '@utils/fetcher';
import Container from '@layouts/Container';
import MovieList from '@components/MovieList';

const Home = () => {
  const [movieDataList, setMovieDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    setIsLoading(true);
    axios.all(
      [fetcher.get(requests.fetchTrending), 
       fetcher.get(requests.fetchRomanceMovies), 
       fetcher.get(requests.fetchComedyMovies), 
       fetcher.get(requests.fetchHorrorMovies)]
    )
    .then(
      axios.spread((res1, res2, res3, res4)=> {
        console.log(res1, res2, res3, res4);
        const res1Data = {title: "Trending" , movieData: res1.data.results};
        const res2Data = {title: "Romance" , movieData: res2.data.results};
        const res3Data = {title: "Comedy" , movieData: res3.data.results};
        const res4Data = {title: "Horror" , movieData: res4.data.results};
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
      <div>로딩중...</div>
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

export default Home;
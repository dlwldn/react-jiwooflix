import React, { useEffect, useState } from 'react';
import { MovieListWrap } from './style';
import requests, { BASE_URL } from '@utils/requests';
import instance from '@utils/fetcher';

const MovieList = ({ category, targetURI }) => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    setIsLoading(true);
    instance.get(requests.fetchTrending)
    .then((res)=> {
      console.log(res);
      setMovieData(res.data.results);
      setIsLoading(false);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <MovieListWrap>
      <h2>{category}</h2>

      <ul>
        {movieData.map((item)=> {
          return (
            <li key={item.id}>
              <img src={`${BASE_URL}${item.poster_path}`} alt={item.id} /> 
            </li>
          )
        })}
      </ul>
    </MovieListWrap>
  )
}

export default MovieList;
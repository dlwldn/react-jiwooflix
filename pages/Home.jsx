import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '587040c615cbfcc68a0ddac00aa51fe4';
const BASE_URL = "https://image.tmdb.org/t/p/original/";

const Home = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`)
    .then((res)=> {
      console.log(res);
      setMovieData(res.data.results);
    })
  }, [])

  return (
    <div>
      {movieData?.map((item)=> {
        return (
          <img src={`${BASE_URL}${item.poster_path}`} alt="" />
        )
      })}
    </div>
  )
}

export default Home;
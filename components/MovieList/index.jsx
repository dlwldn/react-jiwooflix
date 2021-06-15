import React from 'react';

import MovieListItem from '@components/MovieListItem';
import { MovieListWrap } from './style';

const MovieList = ({ movieData, category }) => {
  return (
    <MovieListWrap>
      <h2>{category}</h2>
      <ul>
        {movieData.map((item)=> {
          return (
            <MovieListItem key={item.id} movieListItem={item}/>
          )
        })}
      </ul>
    </MovieListWrap>
  )
}

export default MovieList;
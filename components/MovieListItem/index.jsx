import React from 'react';

import { MovieListItemWrap } from './style';
import { BASE_URL } from '@utils/requests';

const MovieListItem = ({ movieListItem }) => {
  return (
    <MovieListItemWrap>
      <img src={`${BASE_URL}${movieListItem.poster_path}`} alt={movieListItem.id} /> 
    </MovieListItemWrap>
  )
}

export default MovieListItem;
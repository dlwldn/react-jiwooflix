import React from 'react';
import { Link } from 'react-router-dom';

import { MovieListItemWrap, HoverWrap, ListInfoWrap } from './style';
import { BASE_URL } from '@utils/requests';

const MovieListItem = ({ movieListItem }) => {
  return (
    <MovieListItemWrap>
      <Link to={`./${movieListItem.id}`}>
        <div>
          <img src={`${BASE_URL}${movieListItem.poster_path}`} alt={movieListItem.id} /> 

          <HoverWrap className="hover-wrap">
            <div>
              <h3>{movieListItem.title ? movieListItem.title : movieListItem.name}</h3>
              <span>{movieListItem.first_air_date ? movieListItem?.first_air_date : movieListItem?.release_date}</span>
            </div>
            <span>{movieListItem.vote_average}/10</span>
          </HoverWrap>
        </div>
        <ListInfoWrap>
          <h3>{movieListItem.title ? movieListItem.title : movieListItem.name}</h3>
          <span>{movieListItem.first_air_date ? movieListItem?.first_air_date?.substring(0,4) : movieListItem?.release_date?.substring(0,4)}</span>
        </ListInfoWrap>
      </Link>
    </MovieListItemWrap>
  )
}

export default MovieListItem;
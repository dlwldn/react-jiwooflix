import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { MovieListItemWrap, HoverWrap, ListInfoWrap } from './style';
import { IMAGE_BASE_URL } from '@utils/requests';

const MovieListItem = ({ movieListItem }) => {
  const { location } = useHistory();

  return (
    <MovieListItemWrap>
      <Link to={`${location.pathname}/${movieListItem.id}`}>
        <div>
          {movieListItem.poster_path 
            ?
              <img src={`${IMAGE_BASE_URL}${movieListItem.poster_path}`} alt={movieListItem.title} /> 
            :
              <div style={{width: '100%', minHeight: '302px', backgroundColor: 'rgb(57, 62, 70)'}}>이미지가 없어요</div>
          }

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
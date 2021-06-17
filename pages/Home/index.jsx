import React, { useState, useEffect } from 'react';
import axios from 'axios';

import requests from '@utils/requests';
import fetcher from '@utils/fetcher';
import Container from '@layouts/Container';
import MovieList from '@components/MovieList';
import Loading from '@components/Loading';

const Home = () => {
  const [movieDataList, setMovieDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    setIsLoading(true);
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
      
    </Container>
  )
}

export default Home;
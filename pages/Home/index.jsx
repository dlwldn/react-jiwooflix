import React from 'react';
import Container from '@layouts/Container';
import MovieList from '@components/MovieList';

const Home = () => {

  return (
    <Container>
      <MovieList category="Trending"/>
      <MovieList category="Trending"/>
      <MovieList category="Trending"/>
      <MovieList category="Trending"/>
    </Container>
  )
}

export default Home;
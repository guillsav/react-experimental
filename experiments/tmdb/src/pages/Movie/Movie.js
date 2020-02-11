import React from 'react';
import { useParams } from 'react-router-dom';
import useSwr from 'swr';

import Backdrop from './Backdrop';
import Content from './Content';
import Videos from './Videos';

import { MovieContext } from './MovieContext';

export default function Movie() {
  const { movieId } = useParams();

  const {
    data
  } = useSwr(
    `https://api.themoviedb.org/3/movie/${movieId}?page=1&language=en-US`,
    { suspense: true }
  );

  return (
    <MovieContext.Provider value={{ movie: data, movieId: movieId }}>
      <main style={{ margin: '0 auto', width: '95%' }}>
        <Backdrop />
        <Content />
        <Videos />
      </main>
    </MovieContext.Provider>
  );
}

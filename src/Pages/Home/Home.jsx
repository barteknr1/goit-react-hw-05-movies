import React, { useState } from 'react'
import api from 'utils/getMovies'
import { useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const trendingMovies = await api.getTrendingMovies();
        console.log(trendingMovies);
        setMovies(trendingMovies);
      }
      catch (err) {
        console.log(err)
      }
    })();
  }, [])


  return (
    <ul>
      {movies.map(({id, title}) => 
        <li key={id}><a>{title}</a></li>
      )}
    </ul>
  )
};

export default Home
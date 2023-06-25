import React, { useState, useEffect } from 'react'
import api from 'utils/getMovies'
import { Link } from 'react-router-dom';

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
        <li key={id}><Link to="/movies:movieId">{title}</Link></li>
      )}
    </ul>
  )
};

export default Home
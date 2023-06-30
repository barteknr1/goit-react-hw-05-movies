import React, { useState, useEffect } from 'react'
import api from 'utils/getMovies'
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const trendingMovies = await api.getTrendingMovies();
        setMovies(trendingMovies);
      }
      catch (err) {
        console.log(err)
      }
    })();
  }, [])

  return (
    <main>
      <h1 className={css.trendingHeader}>Trending today</h1>
      <ul className={css.trendingList}>
        {movies.map(({ id, title }) =>
          <li
            key={id}>
            <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
          </li>
        )}
      </ul>
    </main>
  )
}

export default Home
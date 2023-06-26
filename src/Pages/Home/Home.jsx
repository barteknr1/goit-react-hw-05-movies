import React, { useState, useEffect } from 'react'
import api from 'utils/getMovies'
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
      <h1>Trending today</h1>
      <ul className="movieList">
        {movies.map(({ id, title }) =>
          <li
            key={id}
            className="movieListItem">
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        )}
      </ul>
    </main>
  )
}

export default Home
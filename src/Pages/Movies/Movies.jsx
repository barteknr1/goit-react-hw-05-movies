import React from 'react';
import css from './Movies.module.css'
import { useState } from 'react';
import api from 'utils/getMovies';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([])

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const moviesByQuery = await api.getMoviesByQuery(query);
        setMovies(moviesByQuery);
      }
      catch (err) {
        console.log(err)
      }
    })();
  }

  return (
    <main className={css.movies}>
      <form
        className={css.searchForm}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          onChange={handleChange}
          value={query}
          className={css.searchFormInput}
          autoFocus
          autoComplete="off"
          placeholder="Search movies"
          required
        />
        <button
          type="submit"
          className={css.searchFormButton}
        />
      </form>
      <div className={css.moviesWrapper}>
        {movies.length > 0 ? (
          <ul className={css.moviesList}>
            {movies.map(({ id, title }) =>
              <li
                key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            )}
          </ul>
        ) : (
          <h4 className="nothingFound">Nothing found</h4>
        )}
      </div>
    </main>
  )
};


export default Movies
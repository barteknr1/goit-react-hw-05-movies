import React from 'react';
import css from './Movies.module.css'
import { useState, useEffect } from 'react';
import api from 'utils/getMovies';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const location = useLocation();
  
  useEffect(() => {
    if (query === "") return;
    (async () => {
      const moviesByQuery = await api.getMoviesByQuery(query);
      setMovies(moviesByQuery);
    })()
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value })
  }

  return (
    <main className={css.movies}>
      <form
        className={css.searchForm}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="query"
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
                <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
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
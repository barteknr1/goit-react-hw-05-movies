import React from 'react'
import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import api from 'utils/getMovies';
import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState([])
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const movie = await api.getMovieById(movieId);
        // console.log(movie);
        setSelectedMovie([movie]);
      }
      catch (err) {
        console.log(err)
      }
    })();
  }, [movieId])

  return (
    <main>
      <div className={css.movieWrapper}>
      <button className={css.button}>Go back</button>
      {selectedMovie.map(({ poster_path, title, release_date, vote_average, overview, genres, id, tagline }) =>
        <div key={id} className={css.movieCard}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${tagline}`}
            className={css.movieImg}
          />
          <div>
            <h2>{title} ({release_date.slice(0, 4)})</h2>
            <p>User Score: {Math.round(vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <ul className={css.movieGenres}>{genres
              .map(({ id, name }) =>
                <li key={id}>{name}</li>)}
            </ul>
          </div>
        </div>
      )}
      <div className={css.movieInfo}>
        <p className={css.movieInfoText}>Additional information</p>
        <ul>
          <li key="cast">
            <Link to="cast">Cast</Link>
          </li>
          <li key="reviews">
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        </div>
        </div>
      <Outlet />
    </main>
  )
}

export default MovieDetails
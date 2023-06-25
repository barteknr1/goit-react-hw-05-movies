import React from 'react'
import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import api from 'utils/getMovies';

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
      {selectedMovie.map(({ poster_path, title, release_date, vote_average, overview, genres, id }) =>
        <div key={id}>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} width="200"></img>
          <div>
            <h2>{title} ({release_date.slice(0, 4)})</h2>
            <p>User Score: {Math.round(vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <ul>{genres
              .map(({id, name}) =>
                <li key={id}>{name}</li>)}
            </ul>
          </div>
        </div>
      )}
      <div>
        <p>Additional information</p>
        <ul>
          <li key="cast">
            <Link to="cast">Cast</Link>
          </li>
          <li key="reviews">
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  )
}

export default MovieDetails
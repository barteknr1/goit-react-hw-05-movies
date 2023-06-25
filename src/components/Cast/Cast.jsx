import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'utils/getMovies';
import css from './Cast.module.css'

const Cast = () => {
  const [cast, setCast] = useState([])
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const getCast = await api.getMovieCast(movieId);
        setCast(getCast.cast);
      }
      catch (err) {
        console.log(err)
      }
    })();
  }, [movieId]);

  return (
    <div>
      <ul className={css.castList}>
        {cast.map(({ name, character, profile_path, id }) =>
          <li key={id} className={css.castItem}>
            {profile_path ? (
              <img src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                className={css.castImg}
                width="200" />
            ) : (
              <div className={css.noPhoto}>{`No photo :(`}</div>
            )}
            <p className={css.castDescription}>{name}</p>
            <p className={css.castDescription}>{`Character: ${character}`}</p>
          </li>
        )}
      </ul>
    </div>
  )
};;

export default Cast
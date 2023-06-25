import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'utils/getMovies';

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
  }, [movieId])
  return (
    <div>
      <ul>
        {cast.map(( {name, character, profile_path, id} ) =>
          <li key={id}>{name}</li>
       )}
      </ul>
    </div>
  )
};

export default Cast
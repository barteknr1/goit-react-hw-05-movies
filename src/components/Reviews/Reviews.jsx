import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'utils/getMovies';

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const reviews = await api.getMovieReviews(movieId);
        setReviews(reviews);
      }
      catch (err) {
        console.log(err)
      }
    })();
  }, [movieId])
  return (
    <div>
      <ul>
        {reviews.map(( {author, id, content} ) =>
          <li key={id}>{author}</li>
       )}
      </ul>
    </div>
  )
};

export default Reviews
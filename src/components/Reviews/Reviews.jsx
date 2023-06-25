import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'utils/getMovies';
import css from './Reviews.module.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const reviews = await api.getMovieReviews(movieId);
        console.log(reviews);
        setReviews(reviews);
      }
      catch (err) {
        console.log(err)
      }
    })();
  }, [movieId])
  return (
    <div>
      <ul className={css.reviewList}>
        {reviews.map(({ author, id, content }) =>
          <li key={id} className={css.reviewItem}>
            <p className={css.reviewAuthor}>Author: {author}</p>
            <p>{content}</p>
          </li>
        )}
      </ul>
    </div>
  )
};

export default Reviews
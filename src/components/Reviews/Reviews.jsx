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
        setReviews(reviews);
      }
      catch (err) {
        console.log(err)
      }
    })();
  }, [movieId])
  return (
    <div>
      {reviews.length > 0 ? (
        <ul className={css.reviewList}>
          {reviews.map(({ author, id, content }) => (
            <li key={id} className={css.reviewItem}>
              <p className={css.reviewAuthor}>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="nothingFound">No reviews</p>
      )}
    </div>
  )
}

export default Reviews
import React from 'react'
// import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";

const MovieDetails = props => {
  const { movieId } = useParams();
  return (
    <div>Now showing product with id - {movieId}</div>
  )
}

// MovieDetails.propTypes = {}

export default MovieDetails
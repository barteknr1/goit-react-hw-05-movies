import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Movies from 'Pages/Movies/Movies'
import MovieDetails from '../Pages/MovieDetails/MovieDetails'
import Cast from './Cast/Cast'
import Reviews from './Reviews/Reviews'

const App = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
};

export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
import React from 'react';
import css from './Movies.module.css'

const Movies = props => {
  return (
    <main className={css.movies}>
      <form className={css.searchForm}>
        <input type="text" className={css.searchFormInput} />
        <button type="submit" className={css.searchFormButton} />
      </form>
      <div>
        <ul>
          {/* movies.map */}
        </ul>
      </div>
    </main>
  )
};


export default Movies
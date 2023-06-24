import React from 'react';
import css from './Movies.module.css'

const Movies = props => {
  return (
    <div className={css.movies}>
      <form className={css.searchForm}>
        <input type="text" className={css.searchFormInput} />
        <button type="submit" className={css.searchFormButton} />
      </form>
      <div>
        <ul>
          {/* movies.map */}
        </ul>
      </div>
    </div>
  )
};


export default Movies
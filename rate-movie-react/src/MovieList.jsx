import React from 'react'

const MovieList = ({ movies, handleClickedMovie }) => {
  return (
    <ul className='list list-movies'>
      {movies?.map((movie) => (
        <li onClick={() => handleClickedMovie(movie.imdbID)} key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MovieList

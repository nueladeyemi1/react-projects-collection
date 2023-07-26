import { func } from 'prop-types'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Loader from './Loader'
import StarRating from './StarRating'

const MovieDetails = ({ KEY, selectedId, handleBack, onAddWatched }) => {
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [userRating, setUserRating] = useState('')

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actor: actors,
    Director: director,
    Genre: genre,
  } = movie

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating,
    }
    onAddWatched(newWatchedMovie)
    handleBack()
  }

  useEffect(
    function() {
      setIsLoading(true)
      async function getMovieDetails() {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${selectedId}&apikey=${KEY}`
        )

        const data = await response.json()

        setMovie(data)
        setIsLoading(false)
      }

      getMovieDetails()
    },
    [selectedId]
  )

  return (
    <div className='details'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className='btn-back' onClick={handleBack}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of the ${movie}`} />
            <div className='details-overview'>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className='rating'>
              <StarRating maxRating={10} size={24} onSet={setUserRating} />
              {userRating > 0 && (
                <button className='btn-add' onClick={handleAdd}>
                  + Add to list
                </button>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  )
}

export default MovieDetails

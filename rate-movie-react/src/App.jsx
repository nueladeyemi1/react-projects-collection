import { useRef } from 'react'
import { useEffect, useState } from 'react'
import Box from './Box'
import Error from './Error'
import { useLocalstorageState } from './Hooks/useLocalstorageState'
import { useMovie } from './Hooks/useMovie'
import Loader from './Loader'
import MovieDetails from './MovieDetails'
import MovieList from './MovieList'
import MovieSummaryList from './MovieSummaryList'
import MovieWatchedList from './MovieWatchedList'
import Navbar from './Navbar'
import StartRating from './StarRating'

const KEY = 'a11bbaa7'
// const title = 'Interstellar2'

export default function App() {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  const [watched, setWatched] = useLocalstorageState([], 'watched')

  const handleClickedMovie = function(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id))
  }

  const handleBack = function() {
    setSelectedId(null)
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie])
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id))
  }

  const { movies, isLoading, message } = useMovie(query, handleBack)

  return (
    <>
      {/* THE STAR RATING COMPONENT */}
      {/* <StartRating maxRating={10} />
      <StartRating color='red' size={16} /> */}

      {/* <Fetch setMovies={setMovies} /> */}
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <main className='main'>
        <Box>
          {isLoading ? (
            <Loader />
          ) : message ? (
            <Error error={message} />
          ) : (
            <MovieList
              movies={movies}
              handleClickedMovie={handleClickedMovie}
            />
          )}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              KEY={KEY}
              selectedId={selectedId}
              handleBack={handleBack}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <MovieSummaryList watched={watched} />
              <MovieWatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </main>
    </>
  )
}

import { useEffect, useState } from 'react'
import Box from './Box'
import Error from './Error'
import Loader from './Loader'
import MovieDetails from './MovieDetails'
import MovieList from './MovieList'
import MovieSummaryList from './MovieSummaryList'
import MovieWatchedList from './MovieWatchedList'
import Navbar from './Navbar'
import StartRating from './StarRating'

// const tempMovieData = [
//   {
//     imdbID: 'tt1375666',
//     Title: 'Inception',
//     Year: '2010',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//   },
//   {
//     imdbID: 'tt0133093',
//     Title: 'The Matrix',
//     Year: '1999',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
//   },
//   {
//     imdbID: 'tt6751668',
//     Title: 'Parasite',
//     Year: '2019',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
//   },
// ]

// const tempWatchedData = [
//   {
//     imdbID: 'tt1375666',
//     Title: 'Inception',
//     Year: '2010',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: 'tt0088763',
//     Title: 'Back to the Future',
//     Year: '1985',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ]

const KEY = 'a11bbaa7'
// const title = 'Interstellar2'

export default function App() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [watched, setWatched] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [message, SetMessage] = useState('')
  const [selectedId, setSelectedId] = useState(null)

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

  useEffect(
    function() {
      const controller = new AbortController()

      const fetchData = async function() {
        try {
          setIsLoading(true)
          SetMessage('')
          // console.log(query)
          const response = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
            { signal: controller.signal }
          )

          // console.log(response)

          if (!response.ok)
            throw new Error('Something went wrong with fetching movies')

          const data = await response.json()

          // console.log(data)

          if (data.Response === 'False') throw new Error('Movie not found')

          setMovies(data.Search)
          SetMessage('')
        } catch (error) {
          if (error.name !== 'AbortError') {
            SetMessage(error.message)
          }
        } finally {
          setIsLoading(false)
        }
      }

      if (query.length < 3) {
        setMovies([])
        SetMessage('')
        return
      }

      fetchData()
      handleBack()

      return function() {
        controller.abort()
      }
    },

    [query]
  )

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

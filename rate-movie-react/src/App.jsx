import { useEffect, useState } from 'react'
import Box from './Box'
import Loader from './Loader'
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
const title = 'Interstellar'

export default function App() {
  const [movies, setMovies] = useState([])
  const [watched, setWatched] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const [message, SetMessage] = useState('')

  const fetchData = async function() {
    try {
      setIsLoading(true)
      const response = await fetch(
        `http://www.omdbapi.com/?s=${title}&apikey=${KEY}`
      )

      // console.log(response)

      if (!response.ok)
        throw new Error('Something went wrong with fetching movies')

      const data = await response.json()

      setMovies(data.Search)
      console.log(data)
    } catch (error) {
      SetMessage(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(function() {
    fetchData()
  }, [])

  return (
    <>
      {/* THE STAR RATING COMPONENT */}
      {/* <StartRating maxRating={10} />
      <StartRating color='red' size={16} /> */}

      {/* <Fetch setMovies={setMovies} /> */}
      <Navbar movies={movies} />
      <main className='main'>
        <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box>

        <Box>
          <MovieSummaryList watched={watched} />
          <MovieWatchedList watched={watched} />
        </Box>
      </main>
    </>
  )
}

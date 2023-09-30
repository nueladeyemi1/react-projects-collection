import axios from 'axios'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzE1NTg2NzY1ZmRiMDNkYTU5MzIzYmJmMDYzZmU1MiIsInN1YiI6IjY1MGMzNjAwMmM2YjdiMDBmZTQ2MDBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.36z-3dK65J2XcdR8w964xWvBt61BJFFptikDa2njHnY',
  },
}
// const KEY = 'd715586765fdb03da59323bbf063fe52'

export async function fetchSlider() {
  const response = await fetch(
    // `https://api.themoviedb.org/3/movie/11?api_key=${KEY}`,
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    options
  )

  const data = await response.json()

  return data
}

export async function ratedMoviesFetch() {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    options
  )

  const data = await response.json()

  return data
}

// const options2 = {
//   method: 'GET',
//   body: JSON.stringify(''),
//   headers: {
//     'Content-type': 'application/json',
//   },
// }

export async function getMovieVideo(id) {
  const response = await axios.get(
    `https://api.kinocheck.de/movies?tmdb_id=${id}`
  )

  const data = await response.json()

  return data
}

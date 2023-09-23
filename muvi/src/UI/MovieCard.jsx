import Rating from '../Components/Rating'
import { useRateMovies } from '../services/useRatedMovies'

const MovieCard = () => {
  const { ratedMovies } = useRateMovies()

  const rated = ratedMovies?.results

  if (rated === undefined) return <>Loading...</>
  //   console.log(ratedMovies?.results)

  return (
    <div className='card__container'>
      {rated.map((movie) => {
        return (
          <section key={movie.id} className='card__items'>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <p>{movie.title}</p>
            {/* <Rating movie={movie} /> */}
          </section>
        )
      })}
    </div>
  )
}

export default MovieCard

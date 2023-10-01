import Rating from '../Components/Rating'
import { useRateMovies } from '../services/useRatedMovies'
import { FcLike, FcNext } from 'react-icons/fc'

const MovieCard = () => {
  const { ratedMovies } = useRateMovies()

  if (ratedMovies === undefined) return <>Loading...</>

  const rated = Array.from({ length: 12 }, (_, i) => ratedMovies?.results[i])

  // console.log(ratedMovies?.results)

  return (
    <section className='whole__card__container'>
      <div className='card__heading__container'>
        <h1 className='card__heading'>Featured Movie</h1>
        <button className='btn__empty'>See more {<FcNext />}</button>
      </div>
      <div className='card__container'>
        {rated.map((movie) => {
          return (
            <section key={movie.id} className='card__items'>
              <img
                className='card__poster'
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />

              <button className='btn__type pos'>TV Series</button>
              <button className='btn__like pos'>
                <FcLike />
              </button>
              <p className='card__text'>
                {'USA, ' + movie.release_date.split('-')[0]}
              </p>
              <p className='card__title'>{movie.title}</p>
              <Rating
                movie={movie}
                styles={{
                  justifyContent: 'space-between',
                  marginTop: '1.2rem',
                  fontSize: '1.2rem',
                }}
              />
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default MovieCard

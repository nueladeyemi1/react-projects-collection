const Rating = ({ movie }) => {
  return (
    <p className='slider__icons'>
      <span className='slider__icon'>
        <img src='./imdb.png' /> {movie.vote_count}
      </span>
      <span className='slider__icon'>
        <img src='./rt.png' /> {movie.vote_average * 10 + '%'}
      </span>
    </p>
  )
}

export default Rating

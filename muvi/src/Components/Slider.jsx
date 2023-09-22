import Navbar from '../UI/Navbar'
import { HiPlayCircle } from 'react-icons/hi2'
import { useSliderMovies } from '../services/useSliderMovies'
import { useState } from 'react'
import { useEffect } from 'react'
// import { BiLogoImdb } from 'react-icons/bi'
// import { SiRottentomatoes } from 'react-icons/si'

const Slider = () => {
  const [count, setCount] = useState(0)
  const { movies } = useSliderMovies()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 3) setCount(-1)

      setCount((count) => count + 1)
    }, 10000)

    return () => clearTimeout(timer)
  }, [count])

  if (movies === undefined) return

  const popularMovies = Array.from({ length: 5 }, (_, i) => movies.results[i])
  //   console.log(popularMovies)

  return (
    <div
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/w500/${popularMovies[count].poster_path})`,
      }}
      className='slider'
    >
      <Navbar />
      <section className={`overall__slider `}>
        <div className='slider__text__container'>
          <h1 className='slider__title'>{popularMovies[count].title}</h1>
          <p className='slider__icons'>
            <span className='slider__icon'>
              <img src='./imdb.png' /> {popularMovies[count].vote_count}
            </span>
            <span className='slider__icon'>
              <img src='./rt.png' />{' '}
              {popularMovies[count].vote_average * 10 + '%'}
            </span>
          </p>
          <p className='desc'>{popularMovies[count].overview}</p>
          <button>
            {' '}
            <HiPlayCircle /> Watch Triller
          </button>
        </div>
        <div className='slider__number'>
          {popularMovies.map((val, index) => (
            <button
              style={{
                display: 'flex',
                gap: '5rem',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '1.2rem',
                fontWeight: '500',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                setCount(+e.target.innerHTML.split(' ').at(-1) - 1)
              }}
              value={popularMovies.indexOf(val)}
              key={index}
            >
              {count === index ? (
                <span value={index}>&mdash; {index + 1}</span>
              ) : (
                <span
                  style={{ paddingLeft: '1.5rem', color: '#b68181a8' }}
                  value={index}
                >
                  {index + 1}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Slider

import { Link, useParams } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { BiCameraMovie } from 'react-icons/bi'
import { RiSlideshow2Line } from 'react-icons/ri'
import { WiShowers } from 'react-icons/wi'

import Logo from '../Components/Logo'
import './moviedetails.css'
import { useGetVideos } from '../services/useGetVideos'
import { usePopularity, useSingleMovie } from '../services/useSingleMovie'

const MovieDetails = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetVideos(id)
  const { singleMovie, isLoadingSingleMovie } = useSingleMovie(id)
  const { popularity, isLoadingPopularity } = usePopularity(id)
  console.log(popularity?.crew)

  if (data === undefined || isLoading) return 'Loading'

  return (
    <section className='detail__container'>
      <aside className='movie__menu'>
        <Logo />
        <div className='menu__links'>
          <Link className='menu__link' to='/'>
            <span>
              <GoHome /> Home
            </span>
          </Link>
          <Link className='menu__link' to='/'>
            <BiCameraMovie /> Movie
          </Link>
          <Link className='menu__link' to='/'>
            <RiSlideshow2Line /> TV Series
          </Link>
          <Link className='menu__link' to='/'>
            <WiShowers /> Upcoming
          </Link>
        </div>
      </aside>
      <div className='movie__video__container'>
        <div class='wrapper'>
          <div class='frame-container'>
            <iframe
              width='420'
              height='315'
              //   src='//www.youtube.com/embed/1sIWez9HAbA'
              src={`https://www.youtube.com/embed/${data.results[0]?.key}?modestbranding=1&autohide=1&showinfo=0&controls=0`}
              frameborder='0'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div style={{ background: 'red' }}>
        <h2>{singleMovie?.title}</h2>
        <ul style={{ display: 'flex', gap: '2rem' }}>
          <li>{singleMovie?.release_date.split('-')[0]}</li>
          <li>{singleMovie?.adult ? 'PG-18' : 'PG-13'}</li>
          <li>{`${Math.floor(singleMovie?.runtime / 60)}h ${Math.floor(
            singleMovie?.runtime % 60
          )}m`}</li>
        </ul>
        <p>{singleMovie?.genres[0]?.name}</p>
        <p>{singleMovie?.genres[1]?.name}</p>
        <div>{singleMovie?.overview}</div>
        <div>
          Director:{' '}
          {popularity?.crew.map((crew) => (
            <span>{crew.job === 'Director' ? crew.name : ''}</span>
          ))}
        </div>
        <div>
          Writer:{' '}
          {popularity?.crew.map((crew) => (
            <span>{crew.job === 'Writer' ? ` ${crew.name} ` : ''}</span>
          ))}
        </div>
        <div>
          Stars:{' '}
          {popularity?.crew.map((crew) => (
            <span>
              {crew.known_for_department === 'Acting' && crew.popularity >= 5
                ? ` ${crew.name}, `
                : ''}
            </span>
          ))}
        </div>
      </div>

      <div style={{ background: 'blue' }}>Video 3</div>
    </section>
  )
}

export default MovieDetails

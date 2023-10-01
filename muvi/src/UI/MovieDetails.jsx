import { Link, useParams } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { BiCameraMovie } from 'react-icons/bi'
import { RiSlideshow2Line } from 'react-icons/ri'
import { WiShowers } from 'react-icons/wi'

import Logo from '../Components/Logo'
import './moviedetails.css'
import { useGetVideos } from '../services/useGetVideos'
import { usePopularity } from '../services/useSingleMovie'
import Crew from '../Components/Crew'

const MovieDetails = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetVideos(id)
  const { popularity, isLoadingPopularity } = usePopularity(id)

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
        <div className='game__container'>
          <p className='game__text'>Play movie quizes and earn free tickets</p>
          <p className='game__text small'>50k+ people are playing now</p>
          <button className='movie__game__button'>Start Playing</button>
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

      <Crew />

      <div style={{ background: 'blue' }}>Video 3</div>
    </section>
  )
}

export default MovieDetails

import { Link, useParams } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { BiCameraMovie } from 'react-icons/bi'
import { RiSlideshow2Line } from 'react-icons/ri'
import { WiShowers } from 'react-icons/wi'

import Logo from '../Components/Logo'
import './moviedetails.css'
import { useGetVideos } from '../services/useGetVideos'

const MovieDetails = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetVideos(id)
  console.log(id, data, isLoading, error)

  return (
    <section className='detail__container'>
      <aside className='movie__menu'>
        <Logo />
        <div className='menu__links'>
          <Link className='menu__link' to='/'>
            <GoHome /> Home
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
        <img src='/Rectangle29.webp' alt='Movie Preview' />
        <div>
          <h2>Watch Trailer</h2>
        </div>
      </div>
      <div>Video 2</div>
      <div>Video 3</div>
    </section>
  )
}

export default MovieDetails

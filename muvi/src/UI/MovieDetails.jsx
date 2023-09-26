import { Link } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { BiCameraMovie } from 'react-icons/bi'
import { RiSlideshow2Line } from 'react-icons/ri'
import { WiShowers } from 'react-icons/wi'

import Logo from '../Components/Logo'
import './moviedetails.css'

const MovieDetails = () => {
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
      <div className='movie__video__container'>Video</div>
      <div>Video 2</div>
      <div>Video 3</div>
    </section>
  )
}

export default MovieDetails

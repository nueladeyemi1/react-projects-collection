import { Link } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { BiCameraMovie } from 'react-icons/bi'
import { RiSlideshow2Line } from 'react-icons/ri'
import { WiShowers } from 'react-icons/wi'
import Logo from './Logo'

const Aside = () => {
  return (
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
  )
}

export default Aside

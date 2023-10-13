import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <header className='header'>
      <div className='header-logo-box'>
        <img className='header-logo' src='./logo-white.png' alt='Logo' />
      </div>
      <div className='header-text-box'>
        <h1 className='primary-heading'>
          <span className='primary-heading-main'>Outdoors</span>
          <span className='primary-heading-sub'>is where life happens</span>
        </h1>
        <a className='btn btn-white btn-animated' href='#'>
          Discover our tours
        </a>
      </div>
    </header>
  )
}

export default Hero

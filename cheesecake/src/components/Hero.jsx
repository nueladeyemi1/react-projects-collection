import { FaPlayCircle } from 'react-icons/fa'
import Header from './Header'

const Hero = () => {
  return (
    <section className='hero-section'>
      <Header />
      <div className='hero-container'>
        <div className='hero-container-text-content'>
          <h1 className='hero-container-text-content-title'>
            Bite The World of Cheesecake Wonders
          </h1>
          <p className='hero-container-text-content-text'>
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className='hero-container-text-content-button-box'>
            <button className='hero-container-text-content-button-box-getstarted'>
              Get Started
            </button>
            <button className='hero-container-text-content-button-box-watchdemo'>
              <FaPlayCircle style={{ marginRight: '5px' }} size={18} /> Watch
              Demo
            </button>
          </div>
        </div>
        <img
          src='Main Image (Home).png'
          alt='Hero Cheesecake'
          className='hero-container-image'
        />
      </div>
    </section>
  )
}

export default Hero

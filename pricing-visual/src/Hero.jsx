import React from 'react'
import heroImg from './undraw_data_reports.svg'

const Hero = () => {
  const handleScroll = function() {
    document.querySelector('.form-section').scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section className='hero-container'>
      <div>
        <h1 className='primary-heading'>Organise your sales</h1>
        <p className='hero-text'>
          Calculate the return on investment the Netlify platform delivers
          through enhanced site performance and developer productivity.
        </p>
        <div className='hero-nav'>
          <button onClick={() => handleScroll()} className='btn-hero'>
            Get Started
          </button>
          <p>
            Estimated time to complete: <span>10-15 minutes</span>
          </p>
        </div>
      </div>
      <div>
        <img className='hero-image' src={heroImg} />
      </div>
    </section>
  )
}

export default Hero

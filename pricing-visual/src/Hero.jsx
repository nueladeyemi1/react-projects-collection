import React from 'react'
import heroImg from './undraw_data_reports.svg'
import darkAnalytic from './undraw_dark_analytics.svg'

const Hero = () => {
  const handleScroll = function() {
    document.querySelector('.form-section').scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section className='hero-container'>
      <div>
        <h1 className='primary-heading'>Manage your sales</h1>
        <p className='hero-text'>
          We provide you with comprehensive resources, tools, and guidance to
          help you calculate, analyze, and interpret sales ROI accurately.
          Whether you're a sales professional, business owner, or sales manager.
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
      <div className='hero-image-flex'>
        {/* <img className='hero-image' src={heroImg} /> */}
        <img className='hero-image' src={darkAnalytic} />
      </div>
    </section>
  )
}

export default Hero

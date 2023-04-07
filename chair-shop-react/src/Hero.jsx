import React from 'react'
import hero from './images/hero.jpg'
import './hero.css'

const Hero = () => {
  return (
    <section className="hero__container">
      <div className="hero__textbox">
        <h1>We design and build better chairs, for a better life</h1>
        <p className="hero__text">
          In a small shop in the heart of Lisbon, we spend our days relentlessly
          perfecting the chair. The result is a perfect blend of beauty and
          comfort, that will have a lasting impact on your health.
        </p>
        <a href="/">Shop chairs</a>
      </div>
      <img className='image__hero' src={hero} alt='hero' />
    </section>
  );
}

export default Hero
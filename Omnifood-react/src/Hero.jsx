import React from 'react'
import heroImage from './img/hero.png'
import { theDeliveredImages } from './img/DeliveredImage'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero'>
        <div className='hero-text-box'>
          <h1 className='primary-title'>
            A healthy meal delivered to your door, every single day
          </h1>
          <p className='hero-text'>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href='#' className='btn btn-start btn-margin'>
            Start eating well
          </a>
          <a href='#' className='btn btn-see'>
            See More &darr;
          </a>
          <div className='delivered-image'>
            <div className='imgs'>
              {theDeliveredImages.map(({ id, image }) => {
                return <img key={id} src={image} alt='' />
              })}
            </div>
            <p>
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className='hero-img-box'>
          <img
            className='hero-img'
            src={heroImage}
            alt='Hero Image of woman eating'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

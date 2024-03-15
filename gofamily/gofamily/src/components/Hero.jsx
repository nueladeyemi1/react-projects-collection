import React from 'react'
import './hero.css'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
    <section className='hero'>
      <div>
        <h1 className='primary-title gofamily'>
          GoFamily <span className='gofamily-1'></span>
          <span className='gofamily-2'></span>
          <span className='gofamily-3'></span>
        </h1>
        <h2 className='secondary-title'>Go Global with GoFamily</h2>
        <p className='hero-text'>
          Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis eum
          iusto eligendi eum magnam voluptas et perspiciatis sequi qui molestiae
          nostrum
        </p>
        <button className='btn'>Signup</button>
      </div>
      <img className='new-hero-image' src='./heroimage.png' />
      {/* <HeroImage /> */}
    </section>
  )
}

export default Hero

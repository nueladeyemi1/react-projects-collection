import React from 'react'
import './hero.css'

const HeroImage = () => {
  return (
    <div>
      <div className='outter-circle'>
        <div className='inner-circle'></div>
        <div className='inner-circle-image'></div>
        <div className='hero-location-image'>
          <img src='./Rectangle.png' />
        </div>
        <div className='hero-location-image1'></div>
        <div className='hero-location-image2'></div>
        <img className='top-ellipse' src='./ellipse-top.png' />
        <img className='bottom-ellipse' src='./ellipse-bottom.png' />
      </div>
    </div>
  )
}

export default HeroImage

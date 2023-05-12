import React from 'react'
import { imageGallery, testimonial } from './Data'

const Testimonial = () => {
  return (
    <section className='testimonial-section'>
      <div className='testimonial-container'>
        <span className='subheading'>testimonial</span>
        <h2 className='heading-secondary'>
          Once you try it, you can't go back
        </h2>
        <div className='testimonials'>
          {testimonial.map(({ id, image, content, name }) => {
            return (
              <div className='testimonial' key={id}>
                <img className='testimonial-img' src={image} alt='' />
                <blockquote className='testimonial-content'>
                  {content}
                </blockquote>
                <p className='testimonial-name'>{name}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='gallery'>
        {imageGallery.map((image) => {
          return (
            <figure className='gallery-item'>
              <img src={image} />
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonial

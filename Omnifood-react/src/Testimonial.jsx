import React from 'react'
import { imageGallery, testimonial } from './Data'

const Testimonial = () => {
  return (
    <section className='grid grid--2-cols'>
      <div className='grid grid--2-cols'>
        {testimonial.map(({ id, image, content, name }) => {
          return (
            <div key={id}>
              <img src={image} />
              <p>{content}</p>
              <p>{name}</p>
            </div>
          )
        })}
      </div>
      <div className='grid grid--3-cols'>
        {imageGallery.map((image) => {
          return (
            <div>
              <img src={image} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonial

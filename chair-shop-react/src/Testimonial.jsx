import React from 'react'
import customers from './images/customers.jpg'

const Testimonial = () => {
  return (
    <section className="testimonial__section">
      <div className='grid-3-cols'>
        <img src={customers} alt="customers" />
        <div className="testimonial__box">
          <h2>"We couldn't live without these chairs anymore"</h2>
          <blockquote className='testimonial__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
            recusandae earum debitis doloribus in quasi voluptatibus!
          </blockquote>
          <p>— Mary and Sarah Johnson</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial
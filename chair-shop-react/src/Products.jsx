import React from 'react'
import { featuredProducts } from './data'

const Products = () => {
  return (
    <section>
        <h2>Our bestselling chairs</h2>
        <div className='grid-3-cols'>{featuredProducts.map(({id, image, title, featureIcons, purpose, price, btnName})=> {
            return (
              <div key={id} className='chairs'>
                <img src={image} alt="featured-products" />
                <div className="featured__box">
                  <h3>{title}</h3>
                  <ul>
                    {purpose.map((content, index) => {
                      return <li key={index}>{featureIcons[index]}{content}</li>;
                    })}
                  </ul>
                  <div className='chair__details__box'>
                    <p className='chair__price'>{price}</p>
                    <a className='btn btn__small' href="/">{btnName}</a>
                  </div>
                </div>
              </div>
            );
        })}</div>
    </section>
  )
}

export default Products
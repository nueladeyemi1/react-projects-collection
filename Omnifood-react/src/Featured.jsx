import React from 'react'
import { featuresData } from './Data'

const Featured = () => {
  return (
    <section className='section-featured'>
      <div className='container'>
        <h3 className='featuredSubhead'>as featured in</h3>
        <div className='logos'>
          {featuresData.map(({ id, image }) => {
            return (
              <div key={id} className='featured-imgs'>
                <img className='featured-img' src={image} alt='' />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Featured

import React from 'react'
import { realtorsData } from '../data/realtorsData'

const Realtors = () => {
  return (
    <div className='realtors'>
      <h3 className='heading-3'>Top 3 realtors</h3>
      <div className='realtors-list'>
        {realtorsData.map((data) => {
          const { id, image, name, sales } = data

          return (
            <React.Fragment key={id}>
              <img src={image} alt={`${name} image`} className='realtors-img' />
              <div className='realtors-details'>
                <h4 className='heading-4 heading-4-light'>{name}</h4>
                <p className='realtors-sold'>{sales}</p>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Realtors

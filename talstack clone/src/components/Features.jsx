import React from 'react'
import { featureDetails } from '../data/data'

const Features = () => {
  return (
    <section className='feature'>
      <div className='feature-grid'>
        {featureDetails.map((featureDetail) => {
          const { id, pathLink, heading, content } = featureDetail
          return (
            <React.Fragment key={id}>
              <div className={`feature-image-${id}-box`}>
                <img className={`feature-image-${id}`} src={pathLink} />
              </div>
              <div className={`feature-content-${id}`}>
                <h2 className='feature-content-heading'>{heading}</h2>
                <p className='feature-content-text'>{content}</p>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default Features

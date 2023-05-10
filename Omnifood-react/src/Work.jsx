import React from 'react'
import { howItWorksData } from './Data'

const Work = () => {
  return (
    <section className='how-it-works'>
      <div className='container'>
        <span className='subheading'>how it works</span>
        <h2 className='heading-secondary'>
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className='container grid grid--2-cols z-pattern'>
        {howItWorksData.map(({ id, title, content, image }) => {
          return (
            <React.Fragment key={id}>
              <div className='how-text-box'>
                <div className='step-number'>{`${id}`.padStart(2, '0')}</div>
                <h3 className='heading-tertiary'>{title}</h3>
                <div className='step-content'>{content}</div>
              </div>
              <div className='how-img-box'>
                <img className='how-img' src={image} alt='' />
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default Work

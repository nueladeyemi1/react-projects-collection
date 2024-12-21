import React, { useState, useEffect } from 'react'
// import './EngineerTitleSlider.scss'

const EngineerTitleSlider = () => {
  const titles = ['Mechanical', 'Software', 'Backend', 'Frontend']
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='engineer-title-slider'>
      <div className='engineer-title-container'>
        <div className='sliding-title-wrapper'>
          {titles.map((title, index) => (
            <div
              key={title}
              className={`sliding-title ${
                index === currentTitleIndex ? 'active' : ''
              }`}
            >
              {title}
            </div>
          ))}
        </div>
        <span className='static-title'>Engineer</span>
      </div>
    </div>
  )
}

export default EngineerTitleSlider

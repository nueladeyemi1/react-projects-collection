import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import './EngineerTitleSlider.scss' // Import the SCSS file

const EngineerFramerSlider = () => {
  const titles = ['Mechanical', 'Software', 'Backend', 'Frontend']
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='slider-container'>
      <div className='slider-content'>
        <div
          className={`${
            titles[currentTitleIndex] === 'Mechanical'
              ? 'title-slider-1'
              : 'title-slider'
          }`}
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={titles[currentTitleIndex]}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='title'
            >
              {titles[currentTitleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='engineer-text'>Engineer</div>
      </div>
    </div>
  )
}

export default EngineerFramerSlider

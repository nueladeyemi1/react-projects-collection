import { useState } from 'react'
import Navbar from './Navbar'

const Hero = () => {
  const [mouseState, setMouseState] = useState(false)
  const [lastMouse, setLastMouse] = useState(false)

  return (
    <div className='format-hero-bg-color'>
      <section className='hero-section'>
        <Navbar />

        <div className='hero-container'>
          <div className='hero-text-box'>
            <div>
              <h1 className='hero-title'>
                Build competent teams that drive growth
              </h1>
              <p className='hero-text-content'>
                Boost employee performance with courses, tools and mentorship
                from Africa’s best professionals and entrepreneurs.
              </p>
            </div>
            <button className='btn-format btn-get-started hero-btn'>
              Get Started
            </button>
          </div>
          <div className='hero-img-container'>
            <div
              className={
                mouseState || lastMouse ? 'hero-img-1-not-hover' : 'hero-img-1'
              }
            >
              <p className='hero-img-1-text'>
                <h3
                  className={
                    mouseState || lastMouse
                      ? 'hero-img-1-not-hover-text-title'
                      : 'hero-img-1-text-title'
                  }
                >
                  Growth Mindset
                </h3>
                <p
                  className={
                    mouseState || lastMouse
                      ? 'hero-img-1-not-hover-text-number'
                      : 'hero-img-1-text-number'
                  }
                >
                  <span>17 </span>
                  <span>Micro-courses</span>
                </p>
              </p>
            </div>
            <div
              onMouseEnter={() => setMouseState(true)}
              onMouseLeave={() => setMouseState(false)}
              className='hero-img-2'
            >
              <p className='hero-img-2-text'>
                <h3
                  className={
                    mouseState
                      ? 'hero-img-2-hover-text-title'
                      : 'hero-img-2-text-title'
                  }
                >
                  Leveraging Data
                </h3>
                <p
                  className={
                    mouseState
                      ? 'hero-img-2-hover-text-number'
                      : 'hero-img-2-text-number'
                  }
                >
                  <span>7 </span>
                  <span>Micro-courses</span>
                </p>
              </p>
            </div>
            <div
              onMouseEnter={() => setLastMouse(true)}
              onMouseLeave={() => setLastMouse(false)}
              className='hero-img-3'
            >
              <p className='hero-img-3-text'>
                <h3
                  className={
                    lastMouse
                      ? 'hero-img-3-hover-text-title'
                      : 'hero-img-3-text-title'
                  }
                >
                  Team Collaboration
                </h3>
                <p
                  className={
                    lastMouse
                      ? 'hero-img-3-hover-text-number'
                      : 'hero-img-3-text-number'
                  }
                >
                  <span>8 </span>
                  <span>Micro-courses</span>
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero

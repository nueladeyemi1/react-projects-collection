import { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import Navbar from './Navbar'

const Hero = () => {
  const [mouseState, setMouseState] = useState(false)
  const [lastMouse, setLastMouse] = useState(false)
  const [mobileToogle, setMobileToggle] = useState(false)

  function handleToggle() {
    setMobileToggle((toggle) => !toggle)
  }

  return (
    <>
      <div
        className={`${
          mobileToogle ? 'navbar-mobile-menu-active' : 'navbar-mobile-menu'
        }`}
      >
        <div
          className={`${
            mobileToogle
              ? 'navbar-mobile-menu-container'
              : 'navbar-mobile-menu-container-active'
          }`}
        >
          <div className='navbar-mobile-menu-container-flow'>
            <div className='navbar-mobile-menu-container-flow-box'>
              <p className='navbar-mobile-menu-container-flow-toggle'>
                <div className='navbar-logo'>
                  <img
                    src='/logo.svg'
                    alt='Talstack Logo'
                    className='navbar-logo-svg'
                  />
                </div>
                <button onClick={handleToggle} className='navbar-mobile-btn'>
                  {mobileToogle ? (
                    <RxCross2 color='#fff' size={25} />
                  ) : (
                    <HiOutlineMenuAlt4 color='#fff' size={25} />
                  )}
                </button>
              </p>
              <button className='btn-format'>Pricing</button>
            </div>
            <div className='navbar-mobile-menu-btns'>
              <button className='btn-format btn-sign-in'>Sign in</button>
              <button className='btn-format btn-get-started'>
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='format-hero-bg-color'>
        <section className='hero-section'>
          <Navbar handleToggle={handleToggle} mobileToogle={mobileToogle} />

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
                  mouseState || lastMouse
                    ? 'hero-img-1-not-hover'
                    : 'hero-img-1'
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
    </>
  )
}

export default Hero

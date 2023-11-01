import { useState } from 'react'

import { HiMenuAlt1 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false)

  return (
    <>
      <div className='sidebar sidebar-active'>
        <button
          onClick={() => setOpenNav((toggle) => !toggle)}
          className='btn sidebar-btn'
        >
          {openNav ? <RxCross2 size={45} /> : <HiMenuAlt1 size={45} />}
        </button>
      </div>
      {openNav ? (
        <div className='sidebar-link-container'>
          <div
            className='sidebar-link-container-links'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button onClick={() => setOpenNav(false)} className='btn'>
              <Link className='links-sidebar' to='#home'>
                HOME
              </Link>
            </button>
            <button onClick={() => setOpenNav(false)} className='btn'>
              <Link className='links-sidebar' to='#home'>
                FEATURES
              </Link>
            </button>
            <button onClick={() => setOpenNav(false)} className='btn'>
              <Link className='links-sidebar' to='#home'>
                REVIEWS
              </Link>
            </button>
            <button onClick={() => setOpenNav(false)} className='btn'>
              <Link className='links-sidebar' to='#home'>
                PROPERTIES
              </Link>
            </button>
            <button onClick={() => setOpenNav(false)} className='btn'>
              <Link className='links-sidebar' to='#gallery'>
                GALLERY
              </Link>
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Sidebar

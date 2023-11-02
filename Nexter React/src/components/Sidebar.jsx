import { useState } from 'react'

import { HiMenuAlt1 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'

const Sidebar = () => {
  const home = document.querySelector('.container')
  const story = document.querySelector('.story-content')
  const properties = document.querySelector('.homes')
  const gallery = document.querySelector('.gallery')
  const features = document.querySelector('.features')

  function handleClick(element) {
    setOpenNav(false)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const [openNav, setOpenNav] = useState(false)

  return (
    <>
      <div className='sidebar sidebar-active'>
        <button
          onClick={() => setOpenNav((toggle) => !toggle)}
          className={openNav ? 'btn sidebar-btn-active' : 'btn sidebar-btn'}
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
            <button
              onClick={() => handleClick(home)}
              className='btn links-sidebar'
            >
              HOME
            </button>

            <button
              onClick={() => handleClick(features)}
              className='btn links-sidebar'
            >
              FEATURES
            </button>

            <button
              onClick={() => handleClick(story)}
              className='btn links-sidebar'
            >
              STORY
            </button>

            <button
              onClick={() => handleClick(properties)}
              className='btn links-sidebar'
            >
              PROPERTIES
            </button>

            <button
              onClick={() => handleClick(gallery)}
              className='btn links-sidebar'
            >
              GALLERY
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

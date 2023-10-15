import { useState } from 'react'

import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
  const [hideNav, setHideNav] = useState(true)

  function handleNav() {
    setHideNav((hide) => !hide)
  }

  return (
    <div className='navigation'>
      <button onClick={handleNav} className='navigation-btn'>
        {hideNav ? <HiOutlineMenuAlt3 size={35} /> : <RxCross2 size={35} />}
      </button>
      <div
        className={
          hideNav ? 'navigation-background' : 'navigation-background-clicked'
        }
      >
        &nbsp;
      </div>
      <nav className={hideNav ? 'navigation-nav' : 'navigation-nav-clicked'}>
        <ul className='navigation-list'>
          <li className='navigation-item'>
            <a href='' className='navigation-link'>
              <span>01</span> About Natours
            </a>
          </li>
          <li className='navigation-item'>
            <a href='' className='navigation-link'>
              <span>02</span> Your benefits
            </a>
          </li>
          <li className='navigation-item'>
            <a href='' className='navigation-link'>
              <span>03</span> Popular tours
            </a>
          </li>
          <li className='navigation-item'>
            <a href='' className='navigation-link'>
              <span>04</span> Stories
            </a>
          </li>
          <li className='navigation-item'>
            <a href='' className='navigation-link'>
              <span>05</span> Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

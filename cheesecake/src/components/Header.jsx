import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { CiMenuFries } from 'react-icons/ci'
import { RxCross1 } from 'react-icons/rx'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <section className='header'>
      <img
        src='LOGO OF CHEESECAKE.png'
        alt='cheesecake logo'
        className='header-logo'
      />
      <div onClick={() => setToggle((state) => !state)} className='mobile-nav'>
        {toggle ? (
          <RxCross1 size={35} color='#6A4028' />
        ) : (
          <CiMenuFries size={35} color='#6A4028' />
        )}
      </div>
      <NavLinks />
      <button className='header-signup'>Sign up</button>
    </section>
  )
}

export default Header

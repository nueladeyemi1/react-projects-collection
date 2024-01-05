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
        className={toggle ? 'logo-fix header-logo' : 'header-logo'}
      />
      <div
        onClick={() => setToggle((state) => !state)}
        className={toggle ? 'fix mobile-nav' : 'mobile-nav'}
      >
        {toggle ? (
          <RxCross1 size={35} color='#6A4028' />
        ) : (
          <CiMenuFries size={35} color='#6A4028' />
        )}
      </div>
      <div
        className={toggle ? 'mobile-background' : 'no-mobile-background'}
      ></div>
      <NavLinks toggle={toggle} />
      <button className={toggle ? 'show-mobile' : 'header-signup'}>
        Sign up
      </button>
    </section>
  )
}

export default Header

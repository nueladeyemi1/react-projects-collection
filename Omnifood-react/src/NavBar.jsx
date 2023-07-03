import React from 'react'
import navLogo from './img/omnifood-logo.png'
import { navbarData } from './Data'
import { MenuOutline, CloseOutline } from 'react-ionicons'
import { useState } from 'react'

const NavBar = () => {
  const [toggle, setToggle] = useState(true)

  const handleClick = function(e) {
    e.preventDefault()
    setToggle(!toggle)
  }

  return (
    <header className='header'>
      <a href='#'>
        <img className='logo' src={navLogo} alt='Omnifood' />
      </a>
      {toggle ? (
        <nav className='navbar'>
          <ul className='nav-lists'>
            {navbarData.map(({ id, name }) => {
              return (
                <li className='nav-list' key={id}>
                  <a className='nav-link' href=''>
                    {name}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      ) : (
        ''
      )}
      <button className='btn-mobile-nav' onClick={handleClick}>
        {toggle ? (
          <CloseOutline
            className='close'
            color={'#00000'}
            height='25px'
            width='25px'
          />
        ) : (
          <MenuOutline
            className='menu'
            color={'#00000'}
            height='25px'
            width='25px'
          />
        )}
      </button>
    </header>
  )
}

export default NavBar

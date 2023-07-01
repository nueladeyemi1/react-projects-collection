import React from 'react'
import navLogo from './img/omnifood-logo.png'
import { navbarData } from './Data'
import { MenuOutline, CloseOutline } from 'react-ionicons'

const NavBar = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <a href='#'>
          <img className='logo' src={navLogo} alt='Omnifood' />
        </a>
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
          <MenuOutline
            className='menu'
            color={'#00000'}
            height='25px'
            width='25px'
          />
          <CloseOutline
            className='close'
            color={'#00000'}
            height='25px'
            width='25px'
          />
        </ul>
      </nav>
    </header>
  )
}

export default NavBar

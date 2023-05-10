import React from 'react'
import navLogo from './img/omnifood-logo.png'
import { navbarData } from './Data'

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
        </ul>
      </nav>
    </header>
  )
}

export default NavBar

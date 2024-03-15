import { RiArrowDropDownLine } from 'react-icons/ri'
import React from 'react'
import './navbar.css'
// import Link from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='nav-image' src='/gofamily.png' alt='gofamily' />
      <div className='nav-select-container'>
        <a href='#' className='nav-home'>
          Home
          <p className='dot'></p>
        </a>

        <select className='nav-select'>
          <option value='Solutions'>Solutions</option>
        </select>
        <select className='nav-select'>
          <option value='Products'>Products</option>
        </select>
        <select className='nav-select'>
          <option value='Company'>Company</option>
        </select>
      </div>
      <div className='nav-user'>
        <img
          style={{ height: '2.7rem', width: '2.7rem' }}
          src='/Vector.png'
          alt='user'
        />
        <p> Emmanuel</p>
        <RiArrowDropDownLine size={27} />
      </div>
    </nav>
  )
}

export default Navbar

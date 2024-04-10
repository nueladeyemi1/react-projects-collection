import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    <section className='flex items-center justify-between bg-[#4F4646] text-[#ffffff] border-b-[1px] border-b-[#ffffff]'>
      <h2 className='border-r-[1px] border-r-[#ffffff]'>CreativeLogo</h2>
      <div className='flex items-center gap-[16px]'>
        <Link to='/'>Home</Link>
        <select className='bg-transparent'>
          <option>
            <Link to='/services'>Services</Link>
          </option>
        </select>
        <Link to='/pages'>Pages</Link>
        <Link to='/case-shop'>Care Shop</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/content'>Content</Link>
      </div>
      <div className='flex items-center gap-[16px] '>
        <FaInstagram />
        <FaLinkedin />
        <FaTwitter />
        <FaFacebook />
      </div>
      <IoSearchOutline />
      <div>
        <p>Need help?</p>
        <p>+92 666 888 0000</p>
      </div>
    </section>
  )
}

export default Navbar

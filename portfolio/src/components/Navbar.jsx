import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeMobile, setActiveMobile] = useState(false)

  function handleNav() {
    setActiveMobile((state) => !state)
  }

  return (
    <div className='navbar'>
      <h3>Portfolio</h3>
      <div onClick={handleNav} className='navbar-menu'>
        {activeMobile ? <RxCross2 size={30} /> : <BiMenuAltRight size={30} />}
      </div>
      <div
        className={`${
          activeMobile ? 'navbar-navlinks' : 'active navbar-navlinks'
        }`}
      >
        <Link className='navbar-link'>Projects</Link>
        <Link className='navbar-link'>CAD models</Link>
        <Link className='navbar-link'>Contact me</Link>
      </div>
    </div>
  )
}
export default Navbar

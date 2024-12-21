import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
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
        <div className=''>
          {[
            { section: 'home' },
            { section: 'about' },
            { section: 'projects' },
            { section: 'contact' },
          ].map(({ section }) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              // className={`flex flex-col items-center ${
              //   activeSection === section ? 'text-blue-600' : 'text-gray-500'
              // }`}
            >
              {/* <Icon /> */}
              <span className='text-xs mt-1 capitalize'>{section}</span>
            </button>
          ))}
        </div>

        <Link className='navbar-link'>Projects</Link>
        <Link className='navbar-link'>CAD models</Link>
        <Link className='navbar-link'>Contact me</Link>
      </div>
    </div>
  )
}
export default Navbar

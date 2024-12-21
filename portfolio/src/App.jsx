import { BrowserRouter, Link } from 'react-router-dom'
import Body from './components/Body'
import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// import Portfolio from './Content'
import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { ProjectsSection } from './components/ProjectSection'
import ContactSection from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [activeMobile, setActiveMobile] = useState(false)

  function handleNav() {
    setActiveMobile((state) => !state)
  }

  return (
    <BrowserRouter>
      <div className='app'>
        {/* <Navbar /> */}
        <div className='navbar'>
          <h3>Portfolio</h3>
          <div onClick={handleNav} className='navbar-menu'>
            {activeMobile ? (
              <RxCross2 size={30} />
            ) : (
              <BiMenuAltRight size={30} />
            )}
          </div>
          <div
            className={`${
              activeMobile ? 'navbar-navlinks' : 'active navbar-navlinks'
            }`}
          >
            <Link
              onClick={() => setActiveSection('home')}
              className='navbar-link'
            >
              Home
            </Link>

            <Link
              onClick={() => setActiveSection('projects')}
              className='navbar-link'
            >
              Projects
            </Link>
            <Link className='navbar-link'>CAD models</Link>
            <Link
              onClick={() => setActiveSection('contact')}
              className='navbar-link'
            >
              Contact me
            </Link>
          </div>
        </div>
        {activeSection === 'home' && <Body />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}

        <Footer />
        {/* <Portfolio /> */}
      </div>
    </BrowserRouter>
  )
}

export default App

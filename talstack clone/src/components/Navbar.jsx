import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {
  return (
    <>
      <div className='navbar-mobile-menu'>
        <div className='navbar-mobile-menu-container'>
          <button className='btn-format'>Pricing</button>
          <div className='navbar-mobile-menu-btns'>
            <button className='btn-format btn-sign-in'>Sign in</button>
            <button className='btn-format btn-get-started'>Get started</button>
          </div>
        </div>
      </div>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <img
            src='/logo.svg'
            alt='Talstack Logo'
            className='navbar-logo-svg'
          />
          {/* <svg className='navbar-logo-svg'>
          <use xlinkHref='/logo.svg#logo'></use>
        </svg> */}
        </div>

        <button className='navbar-mobile-btn'>
          <HiOutlineMenuAlt4 color='#fff' size={25} />
        </button>

        <div className='navbar-btn-container'>
          <button className='btn-format btn-pricing'>Pricing</button>
          <button className='btn-format btn-sign-in'>Sign in</button>
          <button className='btn-format btn-get-started'>Get started</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar

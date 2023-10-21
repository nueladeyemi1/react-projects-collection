import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'

const Navbar = ({ handleToggle, mobileToogle }) => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src='/logo.svg' alt='Talstack Logo' className='navbar-logo-svg' />
        {/* <svg className='navbar-logo-svg'>
          <use xlinkHref='/logo.svg#logo'></use>
        </svg> */}
      </div>

      <button
        onClick={handleToggle}
        className={`${
          mobileToogle
            ? 'navbar-mobile-btn-hidden-on-large'
            : 'navbar-mobile-btn'
        }`}
      >
        {mobileToogle ? (
          <RxCross2 color='#fff' size={25} />
        ) : (
          <HiOutlineMenuAlt4 color='#fff' size={25} />
        )}
      </button>

      <div className='navbar-btn-container'>
        <button className='btn-format btn-pricing'>Pricing</button>
        <button className='btn-format btn-sign-in'>Sign in</button>
        <button className='btn-format btn-get-started'>Get started</button>
      </div>
    </nav>
  )
}

export default Navbar

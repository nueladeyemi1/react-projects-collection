const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src='/logo.svg' alt='Talstack Logo' className='navbar-logo-svg' />
        {/* <svg className='navbar-logo-svg'>
          <use xlinkHref='/logo.svg#logo'></use>
        </svg> */}
      </div>

      <div className='navbar-btn-container'>
        <button className='btn-format btn-pricing'>Pricing</button>
        <button className='btn-format btn-sign-in'>Sign in</button>
        <button className='btn-format btn-get-started'>Get started</button>
      </div>
    </nav>
  )
}

export default Navbar

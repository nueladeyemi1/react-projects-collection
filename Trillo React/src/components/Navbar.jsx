const Navbar = () => {
  return (
    <>
      <ul className='side-nav'>
        <li className='side-nav-item side-nav-item-active'>
          <a href='#' className='side-nav-link '>
            <svg className='side-nav-icon'>
              <use xlinkHref='/sprite.svg#icon-home'></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li className='side-nav-item '>
          <a href='#' className='side-nav-link'>
            <svg className='side-nav-icon'>
              <use xlinkHref='/sprite.svg#icon-aircraft-take-off'></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className='side-nav-item'>
          <a href='#' className='side-nav-link'>
            <svg className='side-nav-icon'>
              <use xlinkHref='/sprite.svg#icon-key'></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li className='side-nav-item'>
          <a href='#' className='side-nav-link'>
            <svg className='side-nav-icon'>
              <use xlinkHref='/sprite.svg#icon-map'></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className='legal'>
        &copy; {new Date().getFullYear()} by trillo. All rights reserved.
      </div>
    </>
  )
}

export default Navbar

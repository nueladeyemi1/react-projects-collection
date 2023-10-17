const Header = () => {
  return (
    <>
      <img src='/logo.png' alt='trillo logo' className='logo' />
      <form action='#' className='search'>
        <input
          type='text'
          className='search-input'
          placeholder='search hotels'
        />
        <button className='search-button'>
          <svg className='search-icon'>
            <use xlinkHref='/sprite.svg#icon-magnifying-glass'></use>
          </svg>
        </button>
      </form>

      <nav className='user-nav'>
        <div className='user-nav-icon-box'>
          <svg className='user-nav-icon'>
            <use xlinkHref='/sprite.svg#icon-bookmark'></use>
          </svg>
          <span className='user-nav-notification'>7</span>
        </div>

        <div className='user-nav-icon-box'>
          <svg className='user-nav-icon'>
            <use xlinkHref='/sprite.svg#icon-chat'></use>
          </svg>
          <span className='user-nav-notification'>13</span>
        </div>

        <div className='user-nav-user'>
          <img src='/user.jpg' alt='user' className='user-nav-user-photo' />
          <span className='user-nav-user-name'>Emmanuel</span>
        </div>
      </nav>
    </>
  )
}

export default Header

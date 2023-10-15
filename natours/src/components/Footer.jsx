const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo-box'>
        <img src='logo-green-2x.png' alt='Full logo' className='footer-logo' />
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer-navigation'>
            <ul className='footer-list'>
              <li className='footer-item'>
                <a href='#' className='footer-link'>
                  Company
                </a>
              </li>
              <li className='footer-item'>
                <a href='#' className='footer-link'>
                  Contact us
                </a>
              </li>
              <li className='footer-item'>
                <a href='#' className='footer-link'>
                  Careers
                </a>
              </li>
              <li className='footer-item'>
                <a href='#' className='footer-link'>
                  Privacy policy
                </a>
              </li>
              <li className='footer-item'>
                <a href='#' className='footer-link'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-1-of-2'>
          <p className='footer-copyright'>
            Built by Emmanuel Adeyemi | Designed by jonas schmedtmann &copy;{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

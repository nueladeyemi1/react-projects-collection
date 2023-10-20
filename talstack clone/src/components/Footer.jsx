import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='format-bg-color footer'>
      <section className='footer-box'>
        <div className='footer-holder'>
          <div className='footer-container'>
            <div className='footer-logo'>
              <img
                src='/logo-white.svg'
                alt='Talstack Logo'
                className='footer-logo-svg'
              />
            </div>
            <div className='footer-links'>
              <div className='footer-link'>
                <button className='footer-btn btn-format'>Pricing</button>
                <button className='footer-btn btn-format'>Sign in</button>
                <button className='footer-btn btn-format'>Get started</button>
              </div>
              <div className='footer-social'>
                <button className='footer-btn footer-social-btn btn-format'>
                  <AiFillLinkedin /> LinkedIn
                </button>
                <button className='footer-btn footer-social-btn btn-format'>
                  <AiOutlineTwitter /> Twitter
                </button>
              </div>
              <span className='footer-copyright'>
                &copy; Talstack {new Date().getFullYear()} - All right reserved
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer

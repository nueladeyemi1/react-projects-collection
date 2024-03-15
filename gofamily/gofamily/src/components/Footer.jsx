import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-col-1'>
        <img className='footer-logo' src='./footer-logo.png' />
        <p className='footer-desc'>
          Gopaddi is a travel network that connects and strengthens people’s
          relationships with a world of beautiful, happy people who are able to
          reach out for their dreams and be who they want to be.
        </p>

        <p className='footer-desc'>
          This network is a community of individuals, families, and
          organisations who have chosen to take control of their travel desires
          and freely explore a world of limitless possibilities.
        </p>
      </div>

      <div className='footer-col-2'>
        <p>Quick Links</p>
        <a href=''>Home</a>
        <a href=''>About Us</a>
        <a href=''>Contact Us</a>
        <a href=''>Terms and Conditions</a>
        <a href=''>Become An Affliate</a>
      </div>

      <div className='footer-col-2'>
        <p>Business Links</p>
        <a href=''>GoPal</a>
        <a href=''>GoBusiness</a>
        <a href=''>GoFamily</a>
        <a href=''>GoAgent</a>
        <a href=''>GoSchool</a>
      </div>

      <div className='footer-col-2'>
        <p>Business Links</p>
        <a href=''>Facebook</a>
        <a href=''>Twitter</a>
        <a href=''>Instagram</a>
        <a href=''>LinkedIn</a>
      </div>

      <div className='footer-col-2'>
        <p>Subscribe to Our Newsletter</p>
        <input className='subscribe' type='text' placeholder='Email' />
        <div className='checkbox'>
          <input type='checkbox' name='' />
          <p className='checkbox-text'>
            By subscribing you are accepting to receive marketing information
            from Aero and agree to the terms of Aero’s Privacy Policy.
          </p>
        </div>
        <img className='footer-map' src='./footer-map.png' />
      </div>
    </footer>
  )
}

export default Footer

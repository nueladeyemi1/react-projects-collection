import React from 'react'
import { footLinkData } from './Data'
import omnifoodLogo from './img/omnifood-logo.png'

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='container grid footer-grid'>
        <div className='logo-column'>
          <a href='#' className='footer-logo'>
            <img className='logo' src={omnifoodLogo} />
          </a>
          <ul className='social-links'>
            <li className='social-link'>
              <a href=''>
                <ion-icon
                  class='social-icon md hydrated'
                  name='logo-instagram'
                  role='img'
                  aria-label='logo instagram'
                ></ion-icon>
              </a>
            </li>
            <li className='social-link'>
              <a href=''>
                <ion-icon
                  class='social-icon md hydrated'
                  name='logo-facebook'
                  role='img'
                  aria-label='logo facebook'
                ></ion-icon>
              </a>
            </li>
            <li className='social-link'>
              <a href=''>
                <ion-icon
                  class='social-icon md hydrated'
                  name='logo-twitter'
                  role='img'
                  aria-label='logo twitter'
                ></ion-icon>
              </a>
            </li>
          </ul>
          <p class='copyright'>
            Copyright © <span class='year'>2023</span> by Omnifood, Inc. All
            rights reserved.
          </p>
        </div>
        <div className='address-column'>
          <p class='footer-heading'>Contact us</p>
          <address class='contacts'>
            <p class='address'>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a class='footer-link' href='tel:415-201-6370'>
                415-201-6370
              </a>
              <br />
              <a class='footer-link' href='mailto:hello@omnifood.com'>
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>

        {footLinkData.map(({ id, heading, links }) => {
          return (
            <nav className='nav-column'>
              <p key={id} className='footer-heading'>
                {heading}
              </p>
              <ul className='footer-nav'>
                {links.map((flink) => {
                  return (
                    <li>
                      <a class='footer-link' href='#'>
                        {flink}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer

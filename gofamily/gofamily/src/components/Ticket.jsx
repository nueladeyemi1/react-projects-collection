import React from 'react'
import './ticket.css'

const Ticket = () => {
  return (
    <div className='ticket'>
      <section className='ticket-section'>
        <div>
          <img className='ticket-app' src='./app.png' />
          <img
            className='ticket-baggage'
            src='./travel-concept-with-baggage.svg'
          />
        </div>
        <div className='ticket-text-container'>
          <h2 className='secondary-title'>
            Unlocking The Magic of Family Travel
          </h2>
          <p className='hero-text'>
            Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis
            eum iusto eligendi eum magnam voluptas et perspiciatis sequi qui
            molestiae nostrum
          </p>
        </div>
      </section>
      <img
        className='ticket-spine'
        src='./spine.png'
        style={{ width: '100%' }}
      />
      <div className='spine-content'>
        <div>
          <h2 className='secondary-title ticket-secondary'>
            Enjoy Special Family Deals
          </h2>
          <p className='hero-text'>
            Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis
            eum iusto eligendi eum magnam voluptas et perspiciatis sequi qui
            molestiae nostrum
          </p>
        </div>
        <img src='./ticket-box.png' />
      </div>
    </div>
  )
}

export default Ticket

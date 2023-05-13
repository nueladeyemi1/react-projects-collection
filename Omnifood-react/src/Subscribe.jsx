import React from 'react'

const Subscribe = () => {
  return (
    <section className='subcribe-section-main'>
      <div className='container'>
        <div className='subscribe-section'>
          <div className='subcribe-form-box'>
            <h2 className='heading-secondary'>Get your first meal for free!</h2>
            <p className='subcribe-content'>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form className='subcribe-form'>
              <div>
                <label className='subcribe-name'>Full Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='John Smith'
                  required
                />
              </div>
              <div>
                <label className='subcribe-name'>Email address</label>
                <input
                  type='email'
                  name='email'
                  placeholder='me@example.com'
                  required
                />
              </div>
              <div>
                <label className='subcribe-name'>Where did you about us?</label>
                <select>
                  <option value=''>Please choose one option:</option>
                  <option value='family'>Family and friends</option>
                  <option value='youtube'>YouTube Video</option>
                  <option value='podcast'>Podcast</option>
                  <option value='facebook'>Facebook ad</option>
                  <option value='others'>Others</option>
                </select>
              </div>

              <button className='btn btn-sign'>Sign up now</button>
            </form>
          </div>
          <div className='subcribe-img'></div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe

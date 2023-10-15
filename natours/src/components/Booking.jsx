import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Booking = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    console.log(form.current)
    emailjs
      .sendForm(
        'service_1mhdzph',
        'template_6952ogo',
        form.current,
        'GsOug08hfQqbgkERA'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section className='section-book'>
      <div className='row'>
        <div className='book'>
          <form ref={form} onSubmit={sendEmail} action='' className='book-form'>
            <div className='u-margin-bottom-medium'>
              <h2 className='heading-secondary'>Start booking now</h2>
            </div>
            <div className='form-group'>
              <input
                type='text'
                id='name'
                className='form-input'
                placeholder='Full name'
                required
              />
              <label htmlFor='name' className='form-label'>
                Full name
              </label>
            </div>
            <div className='form-group'>
              <input
                type='email'
                id='email'
                className='form-input'
                placeholder='Email address'
                required
              />
              <label htmlFor='name' className='form-label'>
                Email address
              </label>
            </div>
            <div className='form-grop u-margin-bottom-medium'>
              <div className='form-radio-group'>
                <input
                  type='radio'
                  className='form-radio-input'
                  id='small'
                  name='size'
                />
                <label htmlFor='small' className='form-radio-label'>
                  <span className='form-radio-btn'></span>
                  Small tour group
                </label>
              </div>
              <div className='form-radio-group'>
                <input
                  type='radio'
                  className='form-radio-input'
                  id='large'
                  name='size'
                />
                <label htmlFor='large' className='form-radio-label'>
                  <span className='form-radio-btn'></span>
                  Large tour group
                </label>
              </div>
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-green'>
                Next step &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking

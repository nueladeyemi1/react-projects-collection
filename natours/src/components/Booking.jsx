import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast, Toaster } from 'react-hot-toast'

const Booking = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [smallGroup, setSmallGroup] = useState(false)
  const [largeGroup, setLargeGroup] = useState(false)

  const smallGroupValidator = smallGroup === 'on' ? true : false
  const largeGroupValidator = smallGroupValidator ? false : true

  const sendEmail = (e) => {
    e.preventDefault()

    const filledValues = {
      name,
      Email: mail,
      smallGroup: smallGroupValidator,
      largeGroup: largeGroupValidator,
    }

    console.log(filledValues)
    emailjs
      .send(
        'service_1mhdzph',
        'template_6952ogo',
        filledValues,
        'GsOug08hfQqbgkERA'
      )
      .then(
        (result) => {
          window.location.reload()
          toast.success(`${name}, you've successfully make bookings. 👏`, {
            duration: 100000,
          })
          console.log(result.text)
        },
        (error) => {
          toast.error(`${name}, please try again. Something went wrong. ⚠`, {
            duration: 100000,
          })
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <Toaster />
      <section className='section-book'>
        <div className='row'>
          <div className='book'>
            <form onSubmit={sendEmail} action='' className='book-form'>
              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary'>Start booking now</h2>
              </div>
              <div className='form-group'>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
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
                    // checked={smallGroup === 'on'}
                    onChange={(e) => setSmallGroup(e.target.value)}
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
                    onChange={(e) => {
                      setSmallGroup('off')
                      setLargeGroup(e.target.value)
                    }}
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
    </>
  )
}

export default Booking

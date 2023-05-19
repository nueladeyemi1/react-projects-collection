import React from 'react'

const Form = () => {
  return (
    <section className='form-section'>
      <form>
        <label>
          First Name*
          <input type='text' required />
        </label>
        <label>
          Last Name*
          <input type='text' required />
        </label>
        <label>
          Phone Number*
          <input type='text' required />
        </label>
        <label>
          Work Email*
          <input type='email' required />
        </label>
        <label>
          Name*
          <input type='text' required />
        </label>
        <label>
          Name*
          <input type='text' required />
        </label>
      </form>
    </section>
  )
}

export default Form

import React, { useState } from 'react'
// import './ContactSection.scss'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    alert(
      'Message sent! (Note: This is a demo - actual submission not implemented)'
    )
  }

  return (
    <div className='contact-section'>
      <h2 className='contact-section__title'>Contact Me</h2>
      <form onSubmit={handleSubmit} className='contact-section__form'>
        <div className='contact-section__form-group'>
          <label htmlFor='name' className='contact-section__label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='contact-section__input'
          />
        </div>
        <div className='contact-section__form-group'>
          <label htmlFor='email' className='contact-section__label'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='contact-section__input'
          />
        </div>
        <div className='contact-section__form-group'>
          <label htmlFor='message' className='contact-section__label'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className='contact-section__textarea'
          ></textarea>
        </div>
        <button type='submit' className='contact-section__submit-btn'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactSection

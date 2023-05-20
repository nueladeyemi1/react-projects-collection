import React from 'react'
import { useState } from 'react'
import { formInputs, selectData } from './formdata'

const Form = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    position: '',
  })

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(e.target.id)
    console.log(newData)
  }

  return (
    <section className='form-section'>
      <form className='form-box'>
        <div className='form-basic'>
          {formInputs.map(({ id, title, type, placeHolder, name }) => {
            return (
              <label key={id}>
                <p>{title}</p>
                <input
                  onChange={(e) => handle(e)}
                  type={type}
                  id={name}
                  value={data.name}
                  placeholder={placeHolder}
                  required
                />
              </label>
            )
          })}
        </div>
        <div>
          <h2>Tell us a little about your ideal prospect.</h2>
          <p>
            This info will be used to generate your Prospect Report & outreach
            messages in real-time during our demo.
          </p>

          {selectData.map(({ id, question, options }) => {
            return (
              <div key={id}>
                <p>{question}</p>
                <select>
                  {options.map((opt) => (
                    <option>{opt}</option>
                  ))}
                </select>
              </div>
            )
          })}
        </div>
      </form>
    </section>
  )
}

export default Form

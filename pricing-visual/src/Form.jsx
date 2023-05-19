import React from 'react'
import { formInputs } from './formdata'

const Form = () => {
  return (
    <section className='form-section'>
      <form>
        {formInputs.map(({ id, title, type, placeHolder }) => {
          return (
            <div>
              <label>
                {title}
                <input type={title} placeholder={placeHolder} required />
              </label>
            </div>
          )
        })}
      </form>
    </section>
  )
}

export default Form

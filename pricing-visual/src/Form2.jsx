import React from 'react'
import { textAreaData, inputData, selectData1 } from './formdata'

const Form2 = () => {
  return (
    <section className='section-form--2'>
      <div>
        <h2 className=''>
          Tell us a little more about yourself professionally.
        </h2>
        <p>Don't overthink your answers! This is just a demo.</p>
        {textAreaData.map(({ id, title, sample, placeHolder }) => {
          return (
            <label className='textarea-label'>
              <p className='text-title'>{title}</p>
              <span>{sample}</span>
              <textarea
                className='text-area-form'
                //   onChange={(e) => handle(e)}
                type='text'
                id='text'
                //   value=''
                placeholder={placeHolder}
                required
              ></textarea>
            </label>
          )
        })}
      </div>
      <div>
        <h2 className=''>Tell us about your biz dev operations</h2>
        <p>
          This doesn't need to be exact. We'll use this information to create
          your business case.
        </p>
        {inputData.map(({ id, title, sample, placeHolder }) => {
          return (
            <label className='textarea-label'>
              <p className='text-title'>{title}</p>
              <span>{sample}</span>
              <input
                className='text-area-form'
                //   onChange={(e) => handle(e)}
                type='number'
                id='text'
                //   value=''
                placeholder={placeHolder}
                required
              />
            </label>
          )
        })}
        {selectData1.map(({ id, question, options }) => {
          return (
            <>
              <p className='text-title'>{question}</p>
              <div>
                {options.map((opt) => (
                  <>
                    <input type='checkbox' />
                    <label>{opt}</label>
                  </>
                ))}
              </div>
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Form2

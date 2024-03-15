import React from 'react'
import './box.css'

const Box = ({ title, text }) => {
  return (
    <div className='box'>
      <h2 className='secondary-title'>{title}</h2>
      <p className='box-text'>{text}</p>
    </div>
  )
}

export default Box

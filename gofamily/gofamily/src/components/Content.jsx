import React from 'react'
import Box from './Box'
import './content.css'

const Content = () => {
  return (
    <>
      <div className='content'>
        <img className='content-image1' src='./grid_image.png' />
        <Box
          title='Experience Parental Control through Request and Approval'
          text='Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis eum iusto eligendi eum magnam voluptas et perspiciatis sequi qui molestiae nostrum'
        />
      </div>
      <div className='content'>
        <Box
          title='Get a Dedicated Relationship Management Team'
          text='Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis eum iusto eligendi eum magnam voluptas et perspiciatis sequi qui molestiae nostrum'
        />
        <img className='content-image1' src='./grid_image2.png' />
      </div>
    </>
  )
}

export default Content

const Story = () => {
  return (
    <>
      <div className='story-pictures'>
        <img
          src='/story-1.jpeg'
          alt='couple with new house'
          className='story-img-1'
        />
        <img src='/story-2.jpeg' alt='new house' className='story-img-2' />
      </div>
      <div className='story-content'>
        <h3 className='heading-3 mb-sm'>Happy Customers</h3>
        <h2 className='heading-2 heading-2-dark mb-md'>
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className='story-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className='btn'>Find your own home</button>
      </div>
    </>
  )
}

export default Story

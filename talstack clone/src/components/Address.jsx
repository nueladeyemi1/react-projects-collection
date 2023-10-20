const Address = () => {
  return (
    <section className='address-section'>
      <div className='address-container'>
        <div className='address-box'>
          <video
            className='address-video'
            poster='/Problem_Solving.png'
            controls={1}
          >
            <source type='video/mp4' src='/video_ggfnn9.mp4'></source>
          </video>
        </div>
        <div className='address-content'>
          <h2 className='address-heading'>
            Want to learn how Talstack can work for your company?
          </h2>
          <button className='btn-format btn-get-started address-btn'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Address

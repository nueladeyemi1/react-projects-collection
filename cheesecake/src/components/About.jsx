const About = () => {
  return (
    <section className='about'>
      <img
        src='About Us Image.png'
        alt='About Us Image'
        className='about-image'
      />

      <div className='about-text-container'>
        <h2 className='about-text-container-title'>We Love Cheesecake</h2>
        <h3 className='about-text-container-subtitle'>
          Discover Our Cheesecake Story
        </h3>
        <p className='about-text-container-text'>
          At Cheesecake Love, quality is our cornerstone. Each cheesecake is
          crafted with the finest ingredients, meticulous attention to detail,
          and a dash of creativity. We believe in delivering not just desserts
          but moments of sheer indulgence.
        </p>
        <button className='hero-container-text-content-button-box-getstarted'>
          Read More
        </button>
      </div>
    </section>
  )
}

export default About

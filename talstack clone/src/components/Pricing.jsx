const Pricing = () => {
  return (
    <section className='pricing-section'>
      <div className='pricing-container'>
        <div className='pricing-content'>
          <div className='pricing'>
            <h2 className='pricing-heading'>
              Learn more about our flexible pricing options and select what
              works best for your business.
            </h2>
            <button className='btn-format btn-get-started pricing-btn'>
              Get Started
            </button>
          </div>
          <img src='/pricing.svg' alt='pricing' className='pricing-img' />
        </div>
      </div>
    </section>
  )
}

export default Pricing

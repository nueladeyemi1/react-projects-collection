const HotelView = () => {
  return (
    <>
      <div className='gallery'>
        <figure className='gallery-item'>
          <img
            src='/hotel-1.jpg'
            alt='Photo of hotel 1'
            className='gallery-photo'
          />
        </figure>
        <figure className='gallery-item'>
          <img
            src='/hotel-2.jpg'
            alt='Photo of hotel 2'
            className='gallery-photo'
          />
        </figure>
        <figure className='gallery-item'>
          <img
            src='/hotel-3.jpg'
            alt='Photo of hotel 3'
            className='gallery-photo'
          />
        </figure>
      </div>

      <div className='overview'>
        <h1 className='overview-heading'>Hotel Lagos</h1>
        <div className='overview-stars'>
          {Array.from({ length: 5 }, (_, i) => (
            <svg key={i} className='overview-icon-star'>
              <use xlinkHref='/sprite.svg#icon-star'></use>
            </svg>
          ))}
        </div>

        <div className='overview-location'>
          <svg className='overview-icon-location'>
            <use xlinkHref='/sprite.svg#icon-location-pin'></use>
          </svg>
          <button className='btn-inline'>Lagos, Nigeria</button>
        </div>

        <div className='overview-rating'>
          <div className='overview-rating-average'>8.6</div>
          <div className='overview-rating-count'>429 votes</div>
        </div>
      </div>
    </>
  )
}

export default HotelView

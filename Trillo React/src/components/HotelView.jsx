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

      <div className='detail'>
        <div className='description'>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>

          <p className='paragraph'>
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className='list'>
            <li className='list-item'>Close to the beach</li>
            <li className='list-item'>Breakfast included</li>
            <li className='list-item'>Free airport shuttle</li>
            <li className='list-item'>Free wifi in all rooms</li>
            <li className='list-item'>Air conditioning and heating</li>
            <li className='list-item'>Pets allowed</li>
            <li className='list-item'>We spoke all languages</li>
            <li className='list-item'>Perfect for families</li>
          </ul>

          <div className='recommend'>
            <p className='recommend-count'>
              Lucy and 3 other friends recommend this hotel.
            </p>
            <div className='recommend-friends'>
              <img
                src='/user-3.jpg'
                alt='Friend 3'
                className='recommend-photo'
              />
              <img
                src='/user-4.jpg'
                alt='Friend 4'
                className='recommend-photo'
              />
              <img
                src='/user-5.jpg'
                alt='Friend 5'
                className='recommend-photo'
              />
              <img
                src='/user-6.jpg'
                alt='Friend 6'
                className='recommend-photo'
              />
            </div>
          </div>
        </div>

        <div className='user-reviews'>
          <figure className='review'>
            <blockquote className='review-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className='review-user'>
              <img src='/user-1.jpg' alt='' className='review-photo' />
              <div className='review-user-box'>
                <p className='review-user-name'>Nick Smith</p>
                <p className='review-user-date'>Feb 23rd, 2017</p>
              </div>
              <div className='review-rating'>7.8</div>
            </figcaption>
          </figure>

          <figure className='review'>
            <blockquote className='review-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi.
            </blockquote>
            <figcaption className='review-user'>
              <img src='/user-2.jpg' alt='' className='review-photo' />
              <div className='review-user-box'>
                <p className='review-user-name'>Mary Smith</p>
                <p className='review-user-date'>Sept 13th, 2017</p>
              </div>
              <div className='review-rating'>7.8</div>
            </figcaption>
          </figure>
          <button className='btn-inline'>
            Show all <span>&rarr;</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default HotelView

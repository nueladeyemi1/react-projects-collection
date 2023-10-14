const tourData = [
  {
    id: 1,
    heading: 'The sea explorer',
    detailsList: [
      '3 days tours',
      'Up to 30 people',
      '2 tour guides',
      'Sleep in cozy hotels',
      'Difficulty: easy',
    ],
    priceOnly: 'Only',
    priceValue: '$297',
    btnText: 'Book now!',
  },
  {
    id: 2,
    heading: 'The forest hiker',
    detailsList: [
      '7 days tours',
      'Up to 40 people',
      '6 tour guides',
      'Sleep in provided tents',
      'Difficulty: medium',
    ],
    priceOnly: 'Only',
    priceValue: '$497',
    btnText: 'Book now!',
  },
  {
    id: 3,
    heading: 'The snow adventurer',
    detailsList: [
      '5 days tours',
      'Up to 15 people',
      '3 tour guides',
      'Sleep in provided tents',
      'Difficulty: hard',
    ],
    priceOnly: 'Only',
    priceValue: '$897',
    btnText: 'Book now!',
  },
]

const Tours = () => {
  return (
    <section className='section-tours'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Most Popular tours</h2>
      </div>
      <div className='row'>
        {tourData.map((tour) => (
          <div key={tour.id} className='col-1-of-3'>
            <div className='card'>
              <div className='card-side card-side-front'>
                <div className={`card-picture card-picture-${tour.id}`}>
                  &nbsp;
                </div>
                <h4 className='card-heading'>
                  <span
                    className={`card-heading-span card-heading-span-${tour.id}`}
                  >
                    {tour.heading}
                  </span>
                </h4>

                <div className='card-details'>
                  <ul>
                    {tour.detailsList.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`card-side card-side-back card-side-back-${tour.id}`}
              >
                <div className='card-cta'>
                  <div className='card-price-box'>
                    <p className='card-price-only'>{tour.priceOnly}</p>
                    <p className='card-price-value'>{tour.priceValue}</p>
                  </div>
                  <a href='#' className='btn btn-white'>
                    {tour.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='u-center-text u-margin-top-huge'>
        <a href='#' className='btn btn-green'>
          Discover all tours
        </a>
      </div>
    </section>
  )
}

export default Tours

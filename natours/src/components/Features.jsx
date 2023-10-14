const featureData = [
  {
    id: 1,
    iconName: 'world',
    headingText: 'Explore the world',
  },
  {
    id: 2,
    iconName: 'compass',
    headingText: 'Meet nature',
  },
  {
    id: 3,
    iconName: 'map',
    headingText: 'Find your way',
  },
  {
    id: 4,
    iconName: 'heart',
    headingText: 'Live a healthier life',
  },
]

const Features = () => {
  return (
    <section className='section-features'>
      <div className='row'>
        {featureData.map((data) => (
          <div key={data.id} className='col-1-of-4'>
            <div className='feature-box'>
              <i className={`feature-box-icon icon-basic-${data.iconName}`}></i>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                {data.headingText}
              </h3>
              <p className='feature-box-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features

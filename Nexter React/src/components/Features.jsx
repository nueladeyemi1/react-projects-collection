import { featureContent } from '../data/featuresData'

const Features = () => {
  return (
    <section className='features'>
      {featureContent.map((content) => {
        const { id, iconName, title, textContent } = content

        return (
          <div key={id} className='feature'>
            <svg className='feature-icon'>
              <use xlinkHref={`/sprite.svg#icon-${iconName}`} />
            </svg>
            <h4 className='heading-4 heading-4-dark'>{title}</h4>
            <p className='feature-text'>{textContent}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Features

import { homeData, subData } from '../data/homeData'
import SubHome from './SubHome'

const Homes = () => {
  return (
    <section className='homes'>
      {homeData.map((home) => {
        const { id, image, homeName, type, area, location, price } = home

        return (
          <div key={id} className='home'>
            <img src={image} alt={homeName} className='home-img' />
            <svg className='home-like'>
              <use xlinkHref={`/sprite.svg#icon-heart-full`} />
            </svg>
            <h5 className='home-name'>{homeName}</h5>
            <SubHome
              className={subData[0].className}
              icon={subData[0].icon}
              location={location}
            />
            <SubHome
              className={subData[1].className}
              icon={subData[1].icon}
              type={type}
            />
            <SubHome
              className={subData[2].className}
              icon={subData[2].icon}
              area={area}
            />
            <SubHome
              className={subData[3].className}
              icon={subData[3].icon}
              location={location}
            />
            <button className='btn home-btn '>Contact Realtor</button>
          </div>
        )
      })}
    </section>
  )
}

export default Homes

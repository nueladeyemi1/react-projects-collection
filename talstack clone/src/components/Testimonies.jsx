import { testimonies } from '../data/data'

const Testimonies = () => {
  return (
    <div className='format-bg-color'>
      <section className='testimonies-box'>
        <h2 className='testimonies-heading'>What our customers say</h2>
        <div className='section-testimonies'>
          {testimonies.map((testimonyList) => {
            const {
              id,
              companyName,
              testimony,
              logoPath,
              name,
              position,
            } = testimonyList

            return (
              <div key={id} className='testimony-card'>
                <img
                  src={logoPath}
                  alt={companyName}
                  className='testimony-img'
                />
                <p className='testimony-paragraph'>{testimony}</p>
                <div className='testimony-name-box'>
                  <div className='testimony-name'>{name}</div>
                  <p className='testimony-role'>{position}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Testimonies

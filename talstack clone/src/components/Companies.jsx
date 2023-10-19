import { companiesLogos } from '../data/data'

const Companies = () => {
  return (
    <section className='companies-section'>
      <div className='companies-container'>
        <div className='companies-logo-box'>
          <h2 className='companies-heading'>
            Trusted by top companies
            <div className='companies-logos-grid'>
              {companiesLogos.map((logo) => {
                const { id, name, path } = logo
                return (
                  <img
                    className='companies-logo'
                    key={id}
                    alt={name}
                    src={path}
                  />
                )
              })}
            </div>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Companies

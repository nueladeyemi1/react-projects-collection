import { headerData } from '../data/headerData'

const properties = document.querySelector('.homes')

const Header = () => {
  function handleClick(element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className='header'>
      <img src='/logo.png' alt='Nexter logo' className='header-logo' />
      <h3 className='heading-3'>Your own home:</h3>
      <h1 className='heading-1'>The ultimate freedom</h1>
      <button
        onClick={() => handleClick(properties)}
        className='btn header-btn'
      >
        View our properties
      </button>
      <div className='header-seenon-text'> Seen on</div>
      <div className='header-seenon-logos'>
        {headerData.map((data) => {
          const { id, image } = data

          return <img key={id} src={image} alt={`Seen on logo ${id}`} />
        })}
      </div>
    </header>
  )
}

export default Header

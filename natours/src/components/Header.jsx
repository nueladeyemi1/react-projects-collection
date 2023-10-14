import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header-logo-box'>
          <img className='header-logo' src='./logo-white.png' alt='Logo' />
        </div>
        <div className='header-text-box'>
          <h1 className='primary-heading'>
            <span className='primary-heading-main'>Outdoors</span>
            <span className='primary-heading-sub'>is where life happens</span>
          </h1>
          <a className='btn btn-white btn-animated' href='#'>
            Discover our tours
          </a>
        </div>
      </header>
      {/* <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>Col 1 of 2</div>
          <div className='col-1-of-2'>Col 1 of 2</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-2-of-3'>Col 2 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-2-of-4'>Col 2 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-3-of-4'>Col 3 of 4</div>
        </div>
      </section> */}
    </>
  )
}

export default Header

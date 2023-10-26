import { footerData } from '../data/footerData'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='nav'>
        {footerData.map((data) => {
          const { id, linkName } = data

          return (
            <li key={id} className='nav-item'>
              <a href='#' className='nav-link'>
                {linkName}
              </a>
            </li>
          )
        })}
      </ul>
      <p className='copyright'>
        &copy; Copyright {new Date().getFullYear()} Emmanuel Adeyemi
      </p>
    </footer>
  )
}

export default Footer

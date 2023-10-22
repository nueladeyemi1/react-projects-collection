import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3>Portfolio</h3>
      <div className='navbar-navlinks'>
        <Link className='navbar-link'>Project</Link>
        <Link className='navbar-link'>CAD models</Link>
        <Link className='navbar-link'>Contact me</Link>
      </div>
    </div>
  )
}
export default Navbar

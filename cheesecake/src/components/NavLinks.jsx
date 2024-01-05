const about = document.querySelector('.about')

const links = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'About Us',
    lnk: about,
  },
  {
    id: 3,
    name: 'Menu',
  },
  {
    id: 4,
    name: 'Contact',
  },
]

// console.log(about)
const NavLinks = ({ toggle }) => {
  return (
    <ul className={toggle ? 'show-mobile-links' : 'header-nav'}>
      {links.map((link) => {
        const { id, name, lnk } = link

        return (
          <li
            // onClick={() => {
            //   console.log(lnk)
            //   lnk?.scrollIntoView({ behavior: 'smooth' })
            // }}
            className='header-nav-link'
            key={id}
          >
            {name}
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks

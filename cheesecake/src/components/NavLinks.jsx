const links = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'About Us',
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

const NavLinks = () => {
  return (
    <ul className='header-nav'>
      {links.map((link) => {
        const { id, name } = link

        return (
          <li className='header-nav-link' key={id}>
            {name}
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks

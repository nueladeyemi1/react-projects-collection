const links = [
  {
    id: 1,
    title: 'Conditions of Use',
    location: '/cofu',
  },
  {
    id: 1,
    title: 'Privacy & Policy',
    location: '/policy',
  },
  {
    id: 1,
    title: 'Press Room',
    location: '/pressroom',
  },
]

const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className='footer__link__box'>
        {links.map((link) => (
          <a
            className='footer__links footer__links__text'
            key={link.id}
            href={link.location}
          >
            {link.title}
          </a>
        ))}
      </div>

      <p className='footer__copyright'>
        &copy; {new Date().getFullYear() + ' Muvi by Emmanuel Adeyemi'}
      </p>
    </footer>
  )
}

export default Footer

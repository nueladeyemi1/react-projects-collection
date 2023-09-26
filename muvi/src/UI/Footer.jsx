import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

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
      <div className='footer__links'>
        <Link to=''>
          <AiFillFacebook size={30} />
        </Link>
        <Link>
          <AiOutlineInstagram size={30} />
        </Link>
        <Link>
          <AiOutlineTwitter size={30} />
        </Link>
        <Link>
          <AiFillYoutube size={30} />
        </Link>
      </div>

      <div className='footer__link__box'>
        {links.map((link) => (
          <Link
            className='footer__links footer__links__text'
            to={link.id}
            href={link.location}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <p className='footer__copyright'>
        &copy; {new Date().getFullYear() + ' Muvi by Emmanuel Adeyemi'}
      </p>
    </footer>
  )
}

export default Footer

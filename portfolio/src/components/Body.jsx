import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiMailSend,
} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Body = () => {
  function gotoGit() {
    window.location.href = 'https://github.com/nueladeyemi1'
  }

  function gotoLinkedIn() {
    window.location.href =
      'https://www.linkedin.com/in/emmanuel-adeyemi-289a1883/'
  }

  function gotoTwitter() {
    window.location.href = 'https://github.com/nueladeyemi1'
  }

  return (
    <section className='body'>
      <div className='body-details'>
        <img src='/emmanuel.jpg' alt='Emmanuel' className='body-img' />
        <h3 className='body-name'>Emmanuel Adeyemi</h3>
        <h1 className='body-role'>Frontend Engineer</h1>
      </div>

      <p className='body-description'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
        temporibus delectus explicabo molestias itaque aut neque repellat
        dolores cum dolor harum maxime ea accusantium, quia optio facilis unde
        sunt autem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum, ipsum sapiente doloribus esse ullam a rem. Possimus veniam,
        reiciendis deleniti ullam rerum repellendus minus unde. Ducimus officiis
        ex repellat mollitia.
      </p>

      <div className='body-socials-box'>
        <p>
          Feel free to contact me through any of the provided platforms, or
          simply send me a message right here.
        </p>
        <div className='body-socials-links'>
          <Link to='mailto:emmanuel.adeyemi40@gmail.com' className=''>
            <BiMailSend size={20} />
          </Link>
          <Link to={() => gotoGit()} className=''>
            <BiLogoGithub size={20} />
          </Link>
          <Link to={() => gotoLinkedIn()} className=''>
            <BiLogoLinkedinSquare size={20} />
          </Link>
          <Link className=''>
            <BiLogoTwitter size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Body

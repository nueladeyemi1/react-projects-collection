import Navbar from '../UI/Navbar'
import { HiPlayCircle } from 'react-icons/hi2'
// import { BiLogoImdb } from 'react-icons/bi'
// import { SiRottentomatoes } from 'react-icons/si'

const data = [
  {
    id: 1,
    title: 'John Wick 3 : Parabellum',
    description:
      "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    imdb: '86.0 / 100',
    rottenTomatoes: 97,
  },
  {
    id: 2,
    title: 'John Wick 3 : Parabellum',
    description:
      "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    imdb: '86.0 / 100',
    rottenTomatoes: 97,
  },
  {
    id: 3,
    title: 'John Wick 3 : Parabellum',
    description:
      "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    imdb: '86.0 / 100',
    rottenTomatoes: 97,
  },
  {
    id: 4,
    title: 'John Wick 3 : Parabellum',
    description:
      "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    imdb: '86.0 / 100',
    rottenTomatoes: 97,
  },
  {
    id: 5,
    title: 'John Wick 3 : Parabellum',
    description:
      "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    imdb: '86.0 / 100',
    rottenTomatoes: 97,
  },
]

const Slider = () => {
  return (
    <div className='slider'>
      <Navbar />
      <section className='overall__slider'>
        <div className='slider__text__container'>
          <h1 className='slider__title'>{data[0].title}</h1>
          <p className='slider__icons'>
            <span className='slider__icon'>
              <img src='./imdb.png' /> {data[0].imdb}
            </span>
            <span className='slider__icon'>
              <img src='./rt.png' /> {data[0].rottenTomatoes + '%'}
            </span>
          </p>
          <p className='desc'>{data[0].description}</p>
          <button>
            {' '}
            <HiPlayCircle /> Watch Triller
          </button>
        </div>
        <div className='slider__number'>
          {data.map((content) => (
            <p key={content.id}>{content.id}</p>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Slider

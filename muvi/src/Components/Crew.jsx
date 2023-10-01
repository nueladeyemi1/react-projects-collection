import { useParams } from 'react-router'
import { usePopularity, useSingleMovie } from '../services/useSingleMovie'
import './crew.css'
import CrewPeople from './CrewPeople'

const Crew = () => {
  const { id } = useParams()
  const { singleMovie } = useSingleMovie(id)
  const { popularity } = usePopularity(id)

  return (
    <div className='crew__container'>
      <div className='crew__header'>
        <h2>{singleMovie?.title}</h2>
        <ul className='crew__list'>
          <li>{singleMovie?.release_date.split('-')[0]}</li>
          <li>{singleMovie?.adult ? 'PG-18' : 'PG-13'}</li>
          <li>{`${Math.floor(singleMovie?.runtime / 60)}h ${Math.floor(
            singleMovie?.runtime % 60
          )}m`}</li>
        </ul>
        <p className='crew__genre'>{singleMovie?.genres[0]?.name}</p>
        <p className='crew__genre'>{singleMovie?.genres[1]?.name}</p>
      </div>
      <div className='crew__desc'>{singleMovie?.overview}</div>
      <CrewPeople popularity={popularity?.crew} role='Director' />
      <CrewPeople popularity={popularity?.crew} role='Writer' />
      <CrewPeople
        popularity={popularity?.crew}
        role='Acting'
        popularityValue={5}
      />
      <label className='crew__awards__label'>Top rated movie #61</label>
      <select name='awards' className='crew__awards'>
        <option className='crew__award' value='nomination'>
          Awards 9 nominations
        </option>
      </select>
    </div>
  )
}

export default Crew

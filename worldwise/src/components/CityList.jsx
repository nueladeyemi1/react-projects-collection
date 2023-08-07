import Spinner from './Spinner'
import styles from './CityList.module.css'
import CityItems from './CityItem'
import Message from './Message'
import { useCities } from '../contexts/CitiesProvider'

const CityList = () => {
  const { cities, isLoading } = useCities()

  if (isLoading) return <Spinner />

  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    )

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItems key={city.id} city={city} />
      ))}
    </ul>
  )
}

export default CityList

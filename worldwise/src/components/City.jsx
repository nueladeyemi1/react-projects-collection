import { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useCities } from '../contexts/CitiesProvider'
import Button from './Button'
import styles from './City.module.css'
import Spinner from './Spinner'

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date))

function City() {
  const navigate = useNavigate()
  // const [searchParams, setSearchParams] = useSearchParams()

  const { id } = useParams()
  const { getCity, currentCity, isLoading } = useCities()

  useEffect(
    function() {
      getCity(id)
    },
    [id]
  )

  if (isLoading) return <Spinner />

  // TEMP DATA
  // const currentCity = {
  //   cityName: 'Lisbon',
  //   emoji: '🇵🇹',
  //   date: '2027-10-31T15:59:59.138Z',
  //   notes: 'My favorite city so far!',
  // }

  const { cityName, emoji, date, notes } = currentCity

  // return <h1>City {id}</h1>

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target='_blank'
          rel='noreferrer'
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button
          type='back'
          onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }}
        >
          &larr; Back
        </Button>
        {/* <ButtonBack /> */}
      </div>
    </div>
  )
}

export default City

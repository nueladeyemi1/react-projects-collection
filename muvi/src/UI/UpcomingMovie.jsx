import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const UpcomingMovie = ({ upcomingData }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { id, poster_path } = upcomingData

  useEffect(
    function() {
      function handleNavigate(id) {
        setSearchParams((params) => {
          params.set('upcomingID', id)

          return params
        })

        navigate(`/details/${searchParams.get('upcomingID')}`)
      }
    },
    [id]
  )

  return (
    <Link to={`/details/${id}`}>
      <img
        onClick={() => handleNavigate(1234567)}
        className='upcoming__poster'
        src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
      />
    </Link>
    // <img
    //   onClick={() => handleNavigate(1234567)}
    //   className='upcoming__poster'
    //   src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
    // />
  )
}

export default UpcomingMovie

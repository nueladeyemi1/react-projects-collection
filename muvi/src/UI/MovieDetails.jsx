import { useParams } from 'react-router-dom'

import './moviedetails.css'
import { useGetVideos } from '../services/useGetVideos'
import { usePopularity } from '../services/useSingleMovie'
import Crew from '../Components/Crew'
import Aside from '../Components/Aside'
import ButtonComing from '../Components/ButtonComing'
import { useUpcomingMovies } from '../services/useUpcomingMovies'
import UpcomingMovie from './UpcomingMovie'

const MovieDetails = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetVideos(id)
  const { upcomingData } = useUpcomingMovies()
  const { popularity, isLoadingPopularity } = usePopularity(id)
  console.log(upcomingData)

  if (data === undefined || isLoading) return 'Loading'

  return (
    <section className='detail__container'>
      <Aside />
      <div className='movie__video__container'>
        <div class='wrapper'>
          <div class='frame-container'>
            <iframe
              width='420'
              height='315'
              //   src='//www.youtube.com/embed/1sIWez9HAbA'
              src={`https://www.youtube.com/embed/${data.results[0]?.key}?modestbranding=1&autohide=1&showinfo=0&controls=0`}
              frameborder='0'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <Crew id={id} />

      <div className='coming__movies'>
        <ButtonComing bgColor='#be123c' color='#ffffff'>
          See showtimes
        </ButtonComing>
        <ButtonComing bgColor='rgba(235, 105, 137, 0.2)'>
          More watch options
        </ButtonComing>
        <div className='upcoming__poster__container'>
          <UpcomingMovie upcomingData={upcomingData?.results[2]} />
          <img
            className='upcoming__poster'
            src={`http://image.tmdb.org/t/p/w500/${upcomingData?.results[0].poster_path}`}
          />
          <img
            className='upcoming__poster'
            src={`http://image.tmdb.org/t/p/w500/${upcomingData?.results[1].poster_path}`}
          />
          <img
            className='upcoming__poster'
            src={`http://image.tmdb.org/t/p/w500/${upcomingData?.results[2].poster_path}`}
          />
          <p className='upcoming_label'>
            The Best Movies and Shows in September
          </p>
        </div>
      </div>
    </section>
  )
}

export default MovieDetails

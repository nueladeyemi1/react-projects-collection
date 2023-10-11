import Slider from '../Components/Slider'
import Spinner from '../Components/Spinner'
import Footer from '../UI/Footer'
import MovieCard from '../UI/MovieCard'
import { useSliderMovies } from '../services/useSliderMovies'
import { useRateMovies } from '../services/useRatedMovies'

const Home = () => {
  const { isLoadingSlider } = useSliderMovies()
  const { isLoadingRated } = useRateMovies()

  return (
    <>
      {isLoadingSlider && isLoadingRated ? (
        <Spinner />
      ) : (
        <>
          <Slider />
          <MovieCard />
          <Footer />
        </>
      )}
    </>
  )
}

export default Home

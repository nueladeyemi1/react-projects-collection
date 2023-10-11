import { useQuery } from 'react-query'
import { fetchSlider } from './apiFectch'

export const useSliderMovies = () => {
  const { data: movies, isLoading: isLoadingSlider, error } = useQuery({
    queryKey: ['slider-movies'],
    queryFn: fetchSlider,
  })

  //   console.log(movies)

  return { movies, isLoadingSlider, error }
}

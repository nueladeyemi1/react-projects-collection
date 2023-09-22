import { useQuery } from 'react-query'
import { fetchSlider } from './apiFectch'

export const useSliderMovies = () => {
  const { data: movies, isLoading, error } = useQuery({
    queryKey: ['slider-movies'],
    queryFn: fetchSlider,
  })

  return { movies, isLoading, error }
}

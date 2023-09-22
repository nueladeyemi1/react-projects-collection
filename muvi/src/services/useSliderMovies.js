import { useQuery } from 'react-query'
import { ratedMoviesFetch } from './apiFectch'

export const useSliderMovies = () => {
  const { data: movies, isLoading, error } = useQuery({
    queryKey: ['slider-movies'],
    queryFn: ratedMoviesFetch,
  })

  return { movies, isLoading, error }
}

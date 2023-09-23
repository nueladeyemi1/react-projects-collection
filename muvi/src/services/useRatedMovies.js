import { useQuery } from 'react-query'
import { ratedMoviesFetch } from './apiFectch'

export const useRateMovies = () => {
  const { data: ratedMovies, isLoading, error } = useQuery({
    queryKey: ['slider-movies'],
    queryFn: ratedMoviesFetch,
  })

  console.log(ratedMovies)

  return { ratedMovies, isLoading, error }
}

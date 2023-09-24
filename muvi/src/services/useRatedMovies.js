import { useQuery } from 'react-query'
import { ratedMoviesFetch } from './apiFectch'

export const useRateMovies = () => {
  const { data: ratedMovies, isLoading, error } = useQuery({
    queryKey: ['rated-movies'],
    queryFn: ratedMoviesFetch,
  })

  return { ratedMovies, isLoading, error }
}

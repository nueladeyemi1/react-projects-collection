import { useQuery } from 'react-query'
import { fetchPopularity, getSingleMovie } from './apiFectch'

export function useSingleMovie(id) {
  const { data: singleMovie, isLoading: isLoadingSingleMovie } = useQuery({
    queryKey: ['single-movie'],
    queryFn: () => getSingleMovie(id),
  })

  return { singleMovie, isLoadingSingleMovie }
}

export function usePopularity(id) {
  const { data: popularity, isLoading: isLoadingPopularity } = useQuery({
    queryKey: ['popularity'],
    queryFn: () => fetchPopularity(id),
  })

  return { popularity, isLoadingPopularity }
}

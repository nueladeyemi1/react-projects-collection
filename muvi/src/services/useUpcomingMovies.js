import { useQuery } from 'react-query'
import { upcomingMovies } from './apiFectch'

export function useUpcomingMovies() {
  const { data: upcomingData, isLoading: isLoadingUpcoming } = useQuery({
    queryKey: ['upcoming'],
    queryFn: upcomingMovies,
  })

  return { upcomingData, isLoadingUpcoming }
}

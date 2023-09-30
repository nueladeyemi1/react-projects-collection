import { useQuery } from 'react-query'
import { getMovieVideo } from './apiFectch'

export function useGetVideos(id) {
  const { data, isLoading, error } = useQuery({
    queryFn: ['movie-video'],
    queryFn: () => getMovieVideo(id),
  })

  return { data, isLoading, error }
}

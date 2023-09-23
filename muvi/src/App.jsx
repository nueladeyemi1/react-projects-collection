import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Slider from './Components/Slider'
import MovieCard from './UI/MovieCard'
import Navbar from './UI/Navbar'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Navbar /> */}
      <Slider />
      <MovieCard />
    </QueryClientProvider>
  )
}

export default App

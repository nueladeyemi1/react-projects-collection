import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Slider from './Components/Slider'
import Footer from './UI/Footer'
import MovieCard from './UI/MovieCard'
import Navbar from './UI/Navbar'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Navbar /> */}
      <Slider />
      <MovieCard />
      <Footer />
    </QueryClientProvider>
  )
}

export default App

import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Slider from './Components/Slider'
import Home from './pages/Home'
import Footer from './UI/Footer'
import MovieCard from './UI/MovieCard'
import MovieDetails from './UI/MovieDetails'
import Navbar from './UI/Navbar'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/details/:id' element={<MovieDetails />}></Route>
        </Routes>
        {/* <Navbar /> */}
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Slider from './Components/Slider'
import Navbar from './UI/Navbar'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Navbar /> */}
      <Slider />
    </QueryClientProvider>
  )
}

export default App

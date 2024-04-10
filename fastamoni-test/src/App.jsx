import Navbar from './ui/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './ui/Hero'
import Services from './ui/Services'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Services />
    </BrowserRouter>
  )
}

export default App

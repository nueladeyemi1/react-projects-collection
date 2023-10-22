import { BrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

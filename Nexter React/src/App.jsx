import { BrowserRouter } from 'react-router-dom'
import Features from './components/Features'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Homes from './components/Homes'
import Realtors from './components/Realtors'
import Sidebar from './components/Sidebar'
import Story from './components/Story'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <Story />
        <Homes />
        <Gallery />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

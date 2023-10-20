import Address from './components/Address'
import Pricing from './components/Pricing'
import Companies from './components/Companies'
import Features from './components/Features'
import Hero from './components/Hero'
import Testimonies from './components/Testimonies'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <Hero />
      <Companies />
      <Features />
      <Testimonies />
      <Address />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App

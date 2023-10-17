import Cta from './components/Cta'
import Header from './components/Header'
import HotelView from './components/HotelView'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <Header />
      </header>
      <div className='content'>
        <nav className='sidebar'>
          <Navbar />
        </nav>
        <main className='hotel-view'>
          <HotelView />
          <Cta />
        </main>
      </div>
    </div>
  )
}

export default App

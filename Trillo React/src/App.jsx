import Header from './components/Header'

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <Header />
      </header>
      <div className='content'>
        <nav className='sidebar'>Navigation</nav>
        <main className='hotel-view'>Hotel view</main>
      </div>
    </div>
  )
}

export default App

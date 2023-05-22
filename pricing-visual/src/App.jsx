import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './general.css'
import Pricing from './Pricing'
import Hero from './Hero'
import Form from './Form'
import Form2 from './Form2'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import Roidata from './Roidata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/roidata' element={<Roidata />} />
        </Routes>
      </BrowserRouter>
      {/* <Router>
        <BrowserRouter>
          <Link to='/' element={<Form />} />
          <Link to='/roidata' element={<Roidata />} />
        </BrowserRouter>
      </Router> */}
      {/* <Hero />
      <Form /> */}
      {/* <Form2 /> */}
      {/* <Pricing /> */}
    </>
  )
}

export default App

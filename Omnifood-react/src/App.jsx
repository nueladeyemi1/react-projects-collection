import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import NavBar from './NavBar'
import Work from './Work'
import Featured from './Featured'
import Meals from './Meals'
import Testimonial from './Testimonial'
import Plans from './Plans'
import Subscribe from './Subscribe'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Featured />
      <Work />
      <Meals />
      <Testimonial />
      <Plans />
      <Subscribe />
    </>
  )
}

export default App

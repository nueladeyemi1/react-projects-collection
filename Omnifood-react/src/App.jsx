import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import NavBar from './NavBar'
import Work from './Work'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Work />
    </>
  )
}

export default App

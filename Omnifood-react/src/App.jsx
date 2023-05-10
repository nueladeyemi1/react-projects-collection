import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import NavBar from './NavBar'
import Work from './Work'
import Featured from './Featured'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Featured />
      <Work />
    </>
  )
}

export default App

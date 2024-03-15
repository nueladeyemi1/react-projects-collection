import { useState } from 'react'

import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Ticket from './components/Ticket'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticket />
      <Content />
      <GetStarted />
      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './general.css'
import Pricing from './Pricing'
import Hero from './Hero'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Pricing />
      <Form />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './general.css'
import Pricing from './Pricing'
import Hero from './Hero'
import Form from './Form'
import Form2 from './Form2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Form />
      {/* <Form2 /> */}
      {/* <Pricing /> */}
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pricing from './Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pricing />
    </>
  )
}

export default App

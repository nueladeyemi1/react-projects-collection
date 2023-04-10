import { useState } from 'react'
import Api from './Api'
import './App.css'
import Landing from './Landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Landing />
    <Api />
      </>
  )
}

export default App

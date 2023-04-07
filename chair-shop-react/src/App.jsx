import { useState } from 'react'
import Hero from "./Hero";
import './App.css'
import Ethics from './Ethics';
import Testimonial from './Testimonial';
import Products from './Products';
import Footer from './Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='container'>
    <Hero />
    <Ethics />
    <Testimonial />
    <Products />
    <Footer />
    </main>
  )
}

export default App

import { useEffect, useState } from 'react'
import './index.css'
import Marquee from './lib';
import Tour from './Tours';
import Loading from './Loading';
import Tours from './Tours';

function App() {

  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [refresh, setRefresh] = useState(false)

  const removeTour = (id) => {
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours)
  }

  const fetchApi = async() => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setTours(data)
    } catch (error) {
      
    }
  }


  useEffect (()=>{
    fetchApi()
    setIsLoading(false);
  }, [])

  if (isLoading) {
    return(<main>
      <Loading />
    </main>
    );
  }

  const handleClick = (id) => {
    const newTours = tours.filter((element)=> id !== element.id)
    setTours(newTours)
  }

  const handleRefresh = () => {
    // setRefresh(true)
    setTours(tours)
  }

  if(tours.length === 0 ) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchApi}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
   <main>
    <Tours tours={tours} removeTour={removeTour} />
   </main>
  );
}

export default App


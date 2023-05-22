import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pricing from './Pricing'

const Roidata = () => {
  const [isLoading, setLoading] = useState(true)
  //   const [data, setData] = useState([])
  const navigate = useNavigate()
  const goHome = function() {
    navigate('/')
  }

  //   useEffect(() => {
  //     const fetchApi = async function() {
  //       try {
  //         const response = await axios.get(
  //           'https://businessapi-production.up.railway.app/api/v1/detail/'
  //         )
  //         const data1 = await response.data
  //         setData(data1)
  //         console.log(data1)
  //       } catch (error) {
  //         setLoading(true)
  //       }
  //     }

  //     fetchApi()
  //     setLoading(!isLoading)
  //   }, [])

  return (
    <div>
      {isLoading && <Pricing />}

      <button className='btn btn-hero' onClick={goHome}>
        Back to Home
      </button>
    </div>
  )
}

export default Roidata

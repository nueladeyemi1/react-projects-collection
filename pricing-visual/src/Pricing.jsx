import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Pricing = () => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchData = async function() {
    // const response = await axios.get('http://34.122.156.210:8000/api/v1/list/')
    const response = await axios.get(
      'https://30b4-213-255-147-146.ngrok-free.app/api/v1/detail/'
    )
    console.log(response.data)
  }

  //   'http://30b4-213-255-147-146.ngrok-free.app/api/v1/detail/'

  useEffect(() => {
    if (!isLoading) {
      fetchData()
    }
  }, [])

  const mockDate = [
    {
      message: 'lorem',
      content1: 'text1',
      content2: 'text2',
    },
    {
      message: 'lorem',
      content1: 'text1',
      content2: 'text2',
    },
    {
      message: 'lorem',
      content1: 'text1',
      content2: 'text2',
    },
    {
      message: 'lorem',
      content1: 'text1',
      content2: 'text2',
    },
  ]
  return (
    <div>
      {isLoading ? (
        <p>Fetching data</p>
      ) : (
        <section className='container '>
          <table>
            <thead>
              <th></th>
              <th className='table-head table-head-1' rowSpan={2}>
                Current plan
              </th>
              <th className='table-head table-head-2' rowSpan={2}>
                Current plan
              </th>
            </thead>
            <tbody>
              {mockDate.map((item, index) => {
                return (
                  <tr className={index % 2 === 0 && `switch-color`}>
                    <td>{item.message}</td>
                    <td>{item.content1}</td>
                    <td>{item.content2}</td>
                  </tr>
                )
              })}
            </tbody>
            <thead>
              <th></th>
              <th className='table-head table-head-1' rowSpan={2}>
                Current plan
              </th>
              <th className='table-head table-head-2' rowSpan={2}>
                Current plan
              </th>
            </thead>
          </table>
        </section>
      )}
    </div>
  )
}

export default Pricing

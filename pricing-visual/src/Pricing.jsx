import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { MdNextPlan } from 'react-icons/md'
import { TbBusinessplan } from 'react-icons/tb'
import { RxCross2 } from 'react-icons/rx'

const Pricing = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  // const response = await axios.get('http://34.122.156.210:8000/api/v1/list/')
  //     const response = await axios.get(
  //       'https://30b4-213-255-147-146.ngrok-free.app/api/v1/detail/'

  useEffect(() => {
    const fetchApi = async function() {
      try {
        const response = await axios.get(
          'https://businessapi-production.up.railway.app/api/v1/detail/'
        )
        const data1 = await response.data
        setData(data1)
      } catch (error) {
        setLoading(true)
      }
    }
    fetchApi()
    setLoading(!isLoading)
  }, [])

  const mockDate = [
    {
      id: 1,
      message: 'cost per day',
      content1: `$ ${Number(data.Daily_Organization_BDR_Costs).toFixed(2)}`,
      content2: `$ ${Number(data.ABDD_cost_per_day).toFixed(2)}`,
    },
    {
      id: 2,
      message: 'contacts per month',
      content1: Math.round(data.Contacts_Monthly),
      content2: Math.round(data.ABDD_contacts_per_month),
    },
    {
      id: 3,
      message: 'Average cost per lead',
      content1: `$ ${Number(data.Organization_Avg_Cost_Per_Lead).toFixed(2)}`,
      content2: `$ ${Number(data.ABDD_Avg_Cost_Per_Lead).toFixed(2)}`,
    },
    {
      id: 4,
      message: 'Average cost to generate sale',
      content1: `$ ${Number(
        data.Avg_Organization_BDR_Cost_to_Generate_Sale
      ).toFixed(2)}`,
      content2: `$ ${Number(data.Avg_ABDD_Cost_to_Generate_Sale).toFixed(2)}`,
    },
    {
      id: 5,
      message: 'contact to lead rate',
      content1: Math.floor(data.Contact_to_Lead_Rate),
      content2: (
        <IconContext.Provider
          value={{
            color: 'red',
            className: 'global-class-name',
            style: { height: '1.5rem', width: '1.5rem' },
          }}
        >
          <RxCross2 />
        </IconContext.Provider>
      ),
    },
    {
      id: 6,
      message: 'lead generation rate',
      content1: (
        <IconContext.Provider
          value={{
            color: 'red',
            className: 'global-class-name',
            style: { height: '1.5rem', width: '1.5rem' },
          }}
        >
          <RxCross2 />
        </IconContext.Provider>
      ),
      content2: Math.round(data.ABDD_Lead_Generation_Rate),
    },
    {
      id: 7,
      message: 'savings per month',
      content1: (
        <IconContext.Provider
          value={{
            color: 'red',
            className: 'global-class-name',
            style: { height: '1.5rem', width: '1.5rem' },
          }}
        >
          <RxCross2 />
        </IconContext.Provider>
      ),
      content2: `$ ${Number(data.savings_per_month).toFixed(2)}`,
    },
    {
      id: 8,
      message: 'savings per year',
      content1: (
        <IconContext.Provider
          value={{
            color: 'red',
            className: 'global-class-name',
            style: { height: '1.5rem', width: '1.5rem' },
          }}
        >
          <RxCross2 />
        </IconContext.Provider>
      ),
      content2: `$ ${Number(data.savings_per_year).toFixed(2)}`,
    },
  ]
  return (
    <div>
      {isLoading ? (
        <p>Fetching data</p>
      ) : (
        <section className='container '>
          <button className='btn' onClick={() => window.location.reload()}>
            Fetch Dashboard
          </button>
          <table>
            <thead>
              <th></th>
              <th className='table-head table-head-1'>
                {/* <IconContext.Provider
                  value={{
                    color: '#fff',
                    className: 'global-class-name',
                    style: { height: '1.5rem', width: '1.5rem' },
                  }}
                >
                  <MdNextPlan />
                </IconContext.Provider> */}
                Current plan
              </th>
              <th className='table-head table-head-2'>
                {/* <IconContext.Provider
                  value={{
                    color: '#fff',
                    className: 'global-class-name',
                    style: { height: '1.5rem', width: '1.5rem' },
                  }}
                >
                  <TbBusinessplan />
                </IconContext.Provider> */}
                ABDD
              </th>
            </thead>
            <tbody>
              {mockDate.map((item, index) => {
                return (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 && `switch-color`}
                  >
                    <td className='content--title'>{item.message}</td>
                    <td className='content--text'>{item.content1}</td>
                    <td className='content--text'>{item.content2}</td>
                  </tr>
                )
              })}
            </tbody>
            <thead>
              <th className='thead--bottom'></th>
              <th className='table-head table-head-1' rowSpan={2}>
                $ {Number(data.Annual_Organization_BDR_Costs).toFixed(2)}{' '}
                <span>Per year</span>
              </th>
              <th className='table-head table-head-2' rowSpan={2}>
                $ {Number(data.ABDD_cost_per_year).toFixed(2)}{' '}
                <span>Per year</span>
              </th>
            </thead>
          </table>
        </section>
      )}
    </div>
  )
}

export default Pricing

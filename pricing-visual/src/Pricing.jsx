import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { MdNextPlan } from 'react-icons/md'
import { TbBusinessplan } from 'react-icons/tb'
import { RxCross2 } from 'react-icons/rx'

const Pricing = ({ data }) => {
  const [isLoading, setLoading] = useState(false)

  //   const [data, setData] = useState([])

  //////////

  // const response = await axios.get('http://34.122.156.210:8000/api/v1/list/')
  //     const response = await axios.get(
  //       'https://30b4-213-255-147-146.ngrok-free.app/api/v1/detail/'

  //////////

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

  const mockDate = [
    {
      id: 1,
      message: 'annual cost',
      content1: `$ ${Number(data.Annual_Organization_BDR_Costs).toFixed(2)}`,
      content2: `$ ${Number(data.ABDD_cost_per_year).toFixed(2)}`,
    },
    {
      id: 2,
      message: 'daily cost',
      content1: `$ ${Number(data.Daily_Organization_BDR_Costs).toFixed(2)}`,
      content2: `$ ${Number(data.ABDD_cost_per_day).toFixed(2)}`,
    },
    {
      id: 3,
      message: 'hourly cost',
      content1: `$ ${Number(data.Hourly_Organization_BDR_Costs).toFixed(2)}`,
      content2: `$ ${Number(data.ABDD_cost_per_hour).toFixed(2)}`,
    },
    {
      id: 4,
      message: 'monthly cost',
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
      content2: `$ ${Number(data.ABDD_cost_per_month).toFixed(2)}`,
    },
    {
      id: 5,
      message: 'Average BDR salary',
      content1: `$ ${Number(data.Avg_BDR_Salary).toFixed(2)}`,
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
      message: 'Average training cost',
      content1: `$ ${Number(data.Avg_BDR_Training_Costs).toFixed(2)}`,
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
      id: 7,
      message: 'Benefit cost',
      content1: `$ ${Number(data.Avg_BDR_Benefits).toFixed(2)}`,
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
      id: 8,
      message: 'Organisation cost per lead',
      content1: `$ ${Number(data.Organization_Avg_Cost_Per_Lead).toFixed(2)}`,
      content2: `$ ${Number(data.ABDD_Avg_Cost_Per_Lead).toFixed(2)}`,
    },
    {
      id: 9,
      message: 'Organisation cost per likely sale',
      content1: `$ ${Number(
        data.Avg_Organization_BDR_Cost_to_Generate_Sale
      ).toFixed(2)}`,
      content2: `$ ${Number(data.Avg_ABDD_Cost_to_Generate_Sale).toFixed(2)}`,
    },
    {
      id: 10,
      message: 'Days to generate lead',
      content1: `$ ${Number(
        data.Organization_Lead_Generation_Rate_daily
      ).toFixed(2)}`,
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
      id: 11,
      message: 'Hours to generate lead',
      content1: `$ ${Number(
        data.Organization_Lead_Generation_Rate_hourly
      ).toFixed(2)}`,
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
      id: 12,
      message: 'Monthly lead generation rate',
      content1: `$ ${Number(data.Leads_Monthly).toFixed(2)}`,
      content2: `$ ${Number(data.ABDD_Lead_Generation_Rate).toFixed(2)}`,
    },
    {
      id: 13,
      message: 'monthly prospect',
      content1: `$ ${Number(data.Contacts_Monthly).toFixed(2)}`,
      content2: `$ ${Number(data.ABDD_contacts_per_month).toFixed(2)}`,
    },
    {
      id: 14,
      message: 'contact hourly rate',
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
      content2: `$ ${Number(data.ABDD_contacts_per_hour).toFixed(2)}`,
    },
    {
      id: 15,
      message: 'contact daily rate',
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
      content2: `$ ${Number(data.ABDD_contacts_per_day).toFixed(2)}`,
    },
    {
      id: 16,
      message: 'contact to generate lead',
      content1: `$ ${Number(data.contacts_to_generate_each_lead).toFixed(2)}`,
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
      id: 17,
      message: 'Monthly lead conversion rate',
      content1: `$ ${Number(data.Contact_to_Lead_Rate).toFixed(2)}`,
      content2: `$ ${Number(data.ABDD_Lead_Generation_Rate).toFixed(2)}`,
    },
    {
      id: 18,
      message: 'Organisation lead to close',
      content1: `$ ${Number(data.leads_needed_to_generate_each_sale).toFixed(
        2
      )}`,
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
      id: 19,
      message: 'Team monthly unfruitful',
      content1: `${Number(
        data.organization_unfruitful_contacts_monthly
      ).toFixed(2)}`,
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
      id: 20,
      message: 'Team daily unfruitful',
      content1: `${Number(data.organization_unfruitful_contacts_daily).toFixed(
        2
      )}`,
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
      id: 21,
      message: 'Team hourly unfruitful',
      content1: `${Number(data.organization_unfruitful_contacts_hourly).toFixed(
        2
      )}`,
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
      id: 22,
      message: 'Team monthly unfruitful cost',
      content1: `$ ${Number(data.organization_unfruitful_costs_monthly).toFixed(
        2
      )}`,
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
      id: 23,
      message: 'Team daily unfruitful cost',
      content1: `$ ${Number(data.organization_unfruitful_costs_daily).toFixed(
        2
      )}`,
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
      id: 24,
      message: 'Team hourly unfruitful cost',
      content1: `$ ${Number(data.organization_unfruitful_costs_hourly).toFixed(
        2
      )}`,
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
      id: 25,
      message: 'Unfruitful contact rate',
      content1: `${Number(data.unfruitful_contact_rate).toFixed(2)}`,
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
      id: 26,
      message: 'BDR vs ABBD monthly savings',
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
      id: 27,
      message: 'BDR vs ABBD Annual savings',
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
    {
      id: 28,
      message: 'savings percent',
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
      content2: `${Number(data.saving_rate).toFixed(2)}%`,
    },
    {
      id: 29,
      message: 'CPI reduction',
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
      content2: `${Number(data.CPL_Reduction).toFixed(2)}%`,
    },
  ]
  return (
    <div>
      {isLoading ? (
        <p>Fetching data</p>
      ) : (
        <section className='container '>
          {/* <button className='btn' onClick={() => window.location.reload()}>
            Fetch Dashboard
          </button> */}
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
                $ {Number(data.Annual_Organization_BDR_Costs).toFixed(2)}
                <span>Per year</span>
              </th>
              <th className='table-head table-head-2' rowSpan={2}>
                $ {Number(data.ABDD_cost_per_year).toFixed(2)}
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

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Most popular pick-up addresses',
    },
  },
}

const labels = [
  'Murtala Muhammed International Airport',
  'MM2 Local airport',
  'Ikeja City Mall',
  'Lekki Phase 1',
  'Berger Bus-Stop',
  'Murtala Muhammed Airport Terminal Two (MMA2)',
  'Eko Hotels & Suites',
  'University of Lagos',
  'Landmark Beach',
  'The Good Beach',
  'Shoprite Ikeja City Mall',
  'MMA1 Domestic Airport',
]

export const data = {
  labels,
  datasets: [
    {
      label: 'Location',
      data: [491, 377, 338, 328, 247, 240, 193, 192, 187, 168, 143, 138],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [-1, -2, -7, -2, -5, -9, -9],
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
}

export function HorizontalBar1() {
  return (
    <Bar
      options={options}
      data={data}
      style={{
        display: 'flex',
        margin: '0 auto',
        width: '600px',
        height: '600px',
      }}
    />
  )
}

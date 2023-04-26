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
  'Dropz',
  'Lekki - Epe Expressway',
  'Obafemi Awolowo Way',
  'Admiralty Way',
  'Ikorodu-Ososun Road',
  'Marina Road',
  'Airport Road',
  'Adetokunbo Ademola Street',
  'Adeola Odeku Street',
  'Isaac John Street',
  'Orchid Road',
  'Mobolaji Bank Anthony Way',
]

export const data = {
  labels,
  datasets: [
    {
      label: 'Location',
      data: [984, 577, 502, 479, 340, 260, 217, 205, 205, 188, 183, 182],
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

export function HorizontalBar() {
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

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
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Most common pick-up hours',
    },
  },
}

const labels = [13, 11, 12, 10, 14, 15, 16, 9, 17, 8, 18, 7]

export const data = {
  labels,
  datasets: [
    {
      label: 'Hours',
      data: [
        5751,
        5742,
        5580,
        5580,
        5507,
        5266,
        5083,
        5035,
        4323,
        4211,
        3609,
        3292,
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
}

export function VerticalComponent1() {
  return (
    <Bar
      options={options}
      data={data}
      style={{
        margin: '0 auto',
        width: '600px',
        height: '600px',
      }}
    />
  )
}

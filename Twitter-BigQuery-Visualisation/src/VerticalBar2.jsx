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
      text: 'Least common pick-up hours',
    },
  },
}

const labels = [19, 20, 6, 21, 5, 22, 4, 23, 3, 0, 1, 2]

export const data = {
  labels,
  datasets: [
    {
      label: 'Hours',
      data: [3098, 2764, 2430, 1911, 1502, 1035, 852, 421, 165, 164, 70, 58],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

export function VerticalComponent2() {
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

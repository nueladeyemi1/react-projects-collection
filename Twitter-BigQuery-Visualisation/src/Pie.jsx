import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: [
    'Friday',
    'Thursday',
    'Saturday',
    'Wednesday',
    'Tuesday',
    'Monday',
    'Sunday',
  ],
  datasets: [
    {
      label: '',
      data: [12675, 12354, 12041, 10150, 10003, 9050, 7176],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

export function DoughnutComponent() {
  return (
    <Doughnut
      data={data}
      style={{
        margin: '0 auto',
        width: '350px',
        height: '350px',
      }}
    />
  )
}

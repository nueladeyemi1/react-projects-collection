import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: [
    'Drupz Rider',
    'Emmanuel',
    'David',
    'Michael',
    'Samuel',
    'Temitope',
    'Precious',
    'Damilola',
    'Daniel',
    'Ola',
  ],
  datasets: [
    {
      label: '',
      data: [984, 112, 79, 66, 58, 57, 54, 50, 49, 48],
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

export function PieComponent1() {
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

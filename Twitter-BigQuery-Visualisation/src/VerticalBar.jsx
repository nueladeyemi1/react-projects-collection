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
      text: 'Chart.js Bar Chart',
    },
  },
}

const labels = [
  'Close 53, Victoria garden City, Lekki',
  'Marcopolo Chinese, Lagos',
  '2A Shakiru Anjorin Street, Lekki',
  'Ilesa West',
  'FH5P+9FR, Aja 106104, Lagos',
  'FG5F+RQQ, Lekki Penninsula II 106104, Lagos',
  '9WJM+MCF, 200258, Ibadan, Oyo',
  'M6HH+R3X, 112104, Ota, Ogun State',
  'Palmer George Street',
  '21c Akinyele Street, Ipaja, Lagos',
  'Ogbe Close',
  'soteriachapelofpraise, B/Stop, Ago Palace Way, Lagos',
]

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [
        913.41,
        785.39,
        225.94,
        193.09,
        151.98,
        147.8,
        145.2,
        145.09,
        140.11,
        138.45,
        137.79,
        137.43,
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

export function VerticalComponent() {
  return <Bar options={options} data={data} />
}

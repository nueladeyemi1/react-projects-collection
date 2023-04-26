import { HorizontalBar } from './HorizontalBar'
import { HorizontalBar1 } from './HorizontalBar1'
import { DoughnutComponent } from './Pie'
import { PieComponent1 } from './Pie1'
import { VerticalComponent } from './VerticalBar'
import { VerticalComponent1 } from './VerticalBar1'
import { VerticalComponent2 } from './VerticalBar2'

export const theDatas = [
  {
    id: 1,
    title: 'Most popular pick-up addresses',
    chart: <DoughnutComponent />,
  },
  {
    id: 2,
    title: 'Most common pick-up addresses',
    chart: <HorizontalBar />,
  },
  {
    id: 3,
    title: 'Most popular drop-off addresses',
    chart: <HorizontalBar1 />,
  },
  {
    id: 4,
    title: 'Most common pick-up days',
    chart: <VerticalComponent />,
  },
  {
    id: 5,
    title: 'Trip count by users',
    chart: <PieComponent1 />,
  },
  {
    id: 6,
    title: 'Most common pick-up hours',
    chart: <VerticalComponent1 />,
  },
  {
    id: 7,
    title: 'Least common pick-up hours',
    chart: <VerticalComponent2 />,
  },
]

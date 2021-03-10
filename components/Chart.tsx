import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    name: 'Day 1',
    slow: 4000,
    medium: 2400,
    fast: 2400,
  },
  {
    name: 'Day 2',
    slow: 3000,
    medium: 1398,
    fast: 2210,
  },
  {
    name: 'Day 3',
    slow: 2000,
    medium: 9800,
    fast: 2290,
  },
  {
    name: 'Day 4',
    slow: 2780,
    medium: 3908,
    fast: 2000,
  },
  {
    name: 'Day 5',
    slow: 1890,
    medium: 4800,
    fast: 2181,
  },
  {
    name: 'Day 6',
    slow: 2390,
    medium: 3800,
    fast: 2500,
  },
  {
    name: 'Day 7',
    slow: 3490,
    medium: 4300,
    fast: 2100,
  },
]

const Chart = (): JSX.Element => {
  return (
    <AreaChart
      width={640}
      height={640}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="slow"
        stackId="1"
        stroke="#5a38b1"
        fill="#5a38b1"
      />
      <Area
        type="monotone"
        dataKey="medium"
        stackId="1"
        stroke="#078c76"
        fill="#078c76"
      />
      <Area
        type="monotone"
        dataKey="fast"
        stackId="1"
        stroke="#e67b13"
        fill="#e67b13"
      />
    </AreaChart>
  )
}

export default Chart

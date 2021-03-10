import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

// const data = [
//   {
//     name: 'Day 1',
//     slow: 4000,
//     medium: 2400,
//     fast: 2400,
//   },
//   {
//     name: 'Day 2',
//     slow: 3000,
//     medium: 1398,
//     fast: 2210,
//   },
//   {
//     name: 'Day 3',
//     slow: 2000,
//     medium: 9800,
//     fast: 2290,
//   },
//   {
//     name: 'Day 4',
//     slow: 2780,
//     medium: 3908,
//     fast: 2000,
//   },
//   {
//     name: 'Day 5',
//     slow: 1890,
//     medium: 4800,
//     fast: 2181,
//   },
//   {
//     name: 'Day 6',
//     slow: 2390,
//     medium: 3800,
//     fast: 2500,
//   },
//   {
//     name: 'Day 7',
//     slow: 3490,
//     medium: 4300,
//     fast: 2100,
//   },
// ]

const Chart = ({ historicalData }): JSX.Element => {
  //  const data = []
  // slow: convertToFiat((element.min_fee * txnSize * price) / 100000000)
  const data = historicalData.map((element) =>
    Object.create({
      name: element.date,
      slow: element.min_fee,
      medium: element.median_fee,
      fast: element.max_fee,
    })
  )

  return (
    <ResponsiveContainer width="100%" height={400} minWidth="0">
      <AreaChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width={39} />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="fast"
          stackId="3"
          stroke="#e67b13"
          fill="#e67b13"
        />
        <Area
          type="monotone"
          dataKey="medium"
          stackId="2"
          stroke="#078c76"
          fill="#078c76"
        />
        <Area
          type="monotone"
          dataKey="slow"
          stackId="1"
          stroke="#5a38b1"
          fill="#5a38b1"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart

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

const Chart = ({
  historicalData,
}: {
  historicalData: {
    usd: number
    eur: number
    gbp: number
    date: string
    min_fee: number
    max_fee: number
    median_fee: number
  }[]
}): JSX.Element => {
  //  const data = []
  // slow: convertToFiat((element.min_fee * txnSize * price) / 100000000)
  const data = historicalData.map((element) =>
    Object.create({
      name: new Date(element.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      slow: element.min_fee,
      medium: element.median_fee,
      fast: element.max_fee,
    })
  )

  return (
    <ResponsiveContainer width="100%" height={400} minWidth="0">
      <AreaChart
        data={data.reverse()}
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

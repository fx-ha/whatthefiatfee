import { useContext } from 'react'

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

import { calculateFee } from '../lib/feeCalculation'
import { FiatContext } from '../components/FiatProvider'

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
  const { currency } = useContext(FiatContext)

  const data = historicalData.map((element) => {
    let fiatValue = element.usd
    switch (currency) {
      case 'eur':
        fiatValue = element.eur
        break
      case 'gbp':
        fiatValue = element.gbp
        break
    }
    return Object.create({
      name: new Date(element.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      slow: calculateFee(element.min_fee, fiatValue),
      medium: calculateFee(element.median_fee, fiatValue),
      fast: calculateFee(element.max_fee, fiatValue),
    })
  })

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

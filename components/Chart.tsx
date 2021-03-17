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

import { calculateFee, round } from '../lib/calculator'
import { FiatContext } from '../components/FiatProvider'
import { HistoricalDataType } from '../lib/types'

const Chart = ({
  historicalData,
}: {
  historicalData: HistoricalDataType[]
}): JSX.Element => {
  const { currency } = useContext(FiatContext)
  let currencySymbol = '$'
  switch (currency) {
    case 'eur':
      currencySymbol = '€'
      break
    case 'gbp':
      currencySymbol = '£'
      break
    case 'btc':
      currencySymbol = '₿'
      break
  }

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
      '24h': round(calculateFee(element.min_fee, fiatValue)),
      '4h': round(calculateFee(element.median_fee, fiatValue)),
      '0.5h': round(calculateFee(element.max_fee, fiatValue)),
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
          dataKey="0.5h"
          stackId="3"
          stroke="#e67b13"
          fill="#e67b13"
          unit={currencySymbol}
          animationDuration={1000}
        />
        <Area
          type="monotone"
          dataKey="4h"
          stackId="2"
          stroke="#078c76"
          fill="#078c76"
          unit={currencySymbol}
          animationDuration={1000}
        />
        <Area
          type="monotone"
          dataKey="24h"
          stackId="1"
          stroke="#5a38b1"
          fill="#5a38b1"
          unit={currencySymbol}
          animationDuration={1000}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart

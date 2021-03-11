export type HistoricalDataType = {
  usd: number
  eur: number
  gbp: number
  date: string
  min_fee: number
  max_fee: number
  median_fee: number
}

export type CurrentDataType = {
  usd: number
  eur: number
  gbp: number
  updated_at: string
}

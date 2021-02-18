function Infobox({
  currentData,
  currency,
}: {
  currentData: {
    usd: number
    eur: number
    gbp: number
    median_txn_size: number
    updated_at: string
  }[]
  currency: string
}): JSX.Element {
  return (
    <div className="mb-4">
      Last updated: {currentData[0].updated_at} UTC
      <br />
      Bitcoin fee estimation in {currency.toUpperCase()}
      <br />
      Current Bitcoin price: ${currentData[0].usd}
    </div>
  )
}

export default Infobox

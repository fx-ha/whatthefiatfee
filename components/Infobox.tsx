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
      Bitcoin fee estimation in {currency.toUpperCase()} for a transaction size
      of {Math.round(currentData[0].median_txn_size)} bytes.
      <br />
      Current Bitcoin price: ${currentData[0].usd}
    </div>
  )
}

export default Infobox

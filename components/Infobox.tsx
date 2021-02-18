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
  console.log(currency)

  return (
    <div className="mb-4">
      Last updated: {currentData[0].updated_at} UTC
      <br />
      Bitcoin fee rate estimation in USD for a median transaction size of 500
      bytes.
      <br />
      Current Bitcoin price: ${currentData[0].usd}
    </div>
  )
}

export default Infobox

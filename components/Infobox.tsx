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
  let fiatValue = `$${currentData[0].usd}`
  switch (currency) {
    case 'eur':
      fiatValue = `${currentData[0].eur} €`
      break
    case 'gbp':
      fiatValue = `£${currentData[0].eur}`
      break
    default:
      fiatValue = `$${currentData[0].usd}`
      break
  }
  return (
    <div className="mt-2 mb-4">
      Last updated: {currentData[0].updated_at} UTC
      <br />
      Current Bitcoin price: {fiatValue}
    </div>
  )
}

export default Infobox

const Infobox = ({
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
}): JSX.Element => {
  let fiatValue = Number(currentData[0].usd).toLocaleString('en-US', {
    style: 'currency',
    currency: 'usd',
  })
  switch (currency) {
    case 'eur':
      fiatValue = Number(currentData[0].eur).toLocaleString('de-DE', {
        style: 'currency',
        currency: currency,
      })
      break
    case 'gbp':
      fiatValue = Number(currentData[0].gbp).toLocaleString('en-GB', {
        style: 'currency',
        currency: currency,
      })
      break
  }

  return (
    <div>
      Last updated: {currentData[0].updated_at} UTC
      <br />
      Current Bitcoin price: {fiatValue}
    </div>
  )
}

export default Infobox

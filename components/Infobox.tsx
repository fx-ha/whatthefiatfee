const Infobox = ({
  currentData,
  currency,
}: {
  currentData: {
    usd: number
    eur: number
    gbp: number
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
    <p>
      Last update: {currentData[0].updated_at} UTC
      <br />
      {`1 BTC = ${fiatValue}`}
    </p>
  )
}

export default Infobox

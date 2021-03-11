import { formatDistanceToNow } from 'date-fns'

const Infobox = ({
  currentData,
  currency,
}: {
  currentData: {
    usd: number
    eur: number
    gbp: number
    updated_at: string
  }
  currency: string
}): JSX.Element => {
  let fiatValue = Number(currentData.usd).toLocaleString('en-US', {
    style: 'currency',
    currency: 'usd',
  })
  switch (currency) {
    case 'eur':
      fiatValue = Number(currentData.eur).toLocaleString('de-DE', {
        style: 'currency',
        currency: currency,
      })
      break
    case 'gbp':
      fiatValue = Number(currentData.gbp).toLocaleString('en-GB', {
        style: 'currency',
        currency: currency,
      })
      break
  }

  return (
    <p>
      Last update:{' '}
      {formatDistanceToNow(new Date(currentData.updated_at), {
        addSuffix: true,
      })}
      <br />
      {`1 BTC = ${fiatValue}`}
    </p>
  )
}

export default Infobox

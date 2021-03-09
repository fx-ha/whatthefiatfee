import Table from 'react-bootstrap/Table'

const FeeTable = ({
  fees,
  currentData,
  txnSize,
  currency,
}: {
  fees: { fee: number }[]
  currentData: {
    usd: number
    eur: number
    gbp: number
    median_txn_size: number
    updated_at: string
  }[]
  txnSize: number
  currency: string
}): JSX.Element => {
  let locale = 'en-US'
  let fiatValue = currentData[0].usd
  switch (currency) {
    case 'eur':
      locale = 'de-DE'
      fiatValue = currentData[0].eur
      break
    case 'gbp':
      locale = 'en-GB'
      fiatValue = currentData[0].gbp
      break
    default:
      locale = 'en-US'
      fiatValue = currentData[0].usd
      break
  }

  const convertToFiat = (
    fee: number,
    medianTxnSize: number,
    fiatValue: number,
    currency: string,
    locale: string
  ): string => {
    return currency === 'btc'
      ? ((fee * medianTxnSize) / 100000000).toLocaleString(locale, {
          minimumFractionDigits: 5,
          maximumFractionDigits: 5,
        })
      : ((fee * medianTxnSize * fiatValue) / 100000000).toLocaleString(locale, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: 'currency',
          currency: currency,
        })
  }

  const tableRows = {
    '0.5h': [],
    '1h': [],
    '1.5h': [],
    '2h': [],
    '3h': [],
    '4h': [],
    '6h': [],
    '8h': [],
    '12h': [],
    '16h': [],
    '24h': [],
  }

  let counter = 0
  Object.entries(tableRows).forEach(([key]) => {
    fees.slice(counter, counter + 5).map((fee) => tableRows[key].push(fee.fee))
    counter += 5
  })

  return (
    <Table bordered size="sm" responsive="sm">
      <thead>
        <tr>
          <th></th>
          <th>5%</th>
          <th>20%</th>
          <th>50%</th>
          <th>80%</th>
          <th>95%</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tableRows).map(
          ([tableHeader, tableData], tableRowIndex) => {
            return (
              <tr key={tableRowIndex}>
                <th>{tableHeader}</th>
                {tableData.map((fee, tableDataIndex) => {
                  return (
                    <td key={tableDataIndex}>
                      {convertToFiat(fee, txnSize, fiatValue, currency, locale)}
                    </td>
                  )
                })}
              </tr>
            )
          }
        )}
      </tbody>
    </Table>
  )
}

export default FeeTable

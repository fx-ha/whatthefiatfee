import Table from 'react-bootstrap/Table'

function FeeTable({
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
}): JSX.Element {
  return (
    <Table bordered size="sm">
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
        <tr>
          <th>0.5</th>
          {fees.slice(0, 5).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>1h</th>
          {fees.slice(5, 10).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>1.5</th>
          {fees.slice(10, 15).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>2h</th>
          {fees.slice(15, 20).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>3h</th>
          {fees.slice(20, 25).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>4h</th>
          {fees.slice(25, 30).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>6h</th>
          {fees.slice(30, 35).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>8h</th>
          {fees.slice(35, 40).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>12h</th>
          {fees.slice(40, 45).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>16h</th>
          {fees.slice(45, 50).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>24h</th>
          {fees.slice(50, 55).map((fee: { fee: number }, i: number) => {
            return (
              <td key={i}>
                ${convertToFiat(fee.fee, txnSize, currentData[0].usd)}
              </td>
            )
          })}
        </tr>
      </tbody>
    </Table>
  )
}

function convertToFiat(
  fee: number,
  medianTxnSize: number,
  usd: number
): number {
  return round((fee * medianTxnSize * usd) / 100000000, 2)
}

function round(value: number, decimals: number): number {
  return Number(
    Math.round(parseFloat(value + 'e' + decimals)) + 'e-' + decimals
  )
}

export default FeeTable

export const convertToFiat = (
  fee: number,
  locale: string,
  currency: string
): string => {
  return currency === 'btc'
    ? fee.toLocaleString(locale, {
        minimumFractionDigits: 5,
        maximumFractionDigits: 5,
      })
    : fee.toLocaleString(locale, {
        style: 'currency',
        currency: currency,
      })
}

export const round = (fee: number, currency: string): number => {
  return currency === 'btc'
    ? Number(
        fee.toLocaleString('en-US', {
          minimumFractionDigits: 5,
          maximumFractionDigits: 5,
        })
      )
    : Number(
        fee.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      )
}

export const calculateFee = (
  fee: number,
  fiatValue: number,
  currency: string,
  txnSize: number
): number => {
  return currency === 'btc'
    ? (fee * txnSize) / 100000000
    : (fee * txnSize * fiatValue) / 100000000
}

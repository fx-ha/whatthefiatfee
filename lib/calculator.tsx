import { useContext } from 'react'

import { FiatContext } from '../components/FiatProvider'
import { TxnSizeContext } from '../components/TxnSizeProvider'

export const convertToFiat = (fee: number, locale: string): string => {
  const { currency } = useContext(FiatContext)
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

export const calculateFee = (fee: number, fiatValue: number): number => {
  const { currency } = useContext(FiatContext)
  const { txnSize } = useContext(TxnSizeContext)
  return currency === 'btc'
    ? (fee * txnSize) / 100000000
    : (fee * txnSize * fiatValue) / 100000000
}

import React from 'react'
import { useState, createContext } from 'react'

type TxnSizeContextType = {
  txnSize: number
  setTxnSize: (value: number) => void
}

export const TxnSizeContext = createContext<TxnSizeContextType>(undefined)

const TxnSizeProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [txnSize, setTxnSize] = useState(225)

  return (
    <TxnSizeContext.Provider value={{ txnSize, setTxnSize }}>
      {children}
    </TxnSizeContext.Provider>
  )
}

export default TxnSizeProvider

import { useState, createContext } from 'react'

type TxnSizeContextType = {
  txnSize: number
  setTxnSize: (value: number) => void
}

export const TxnSizeContext = createContext({} as TxnSizeContextType)

const TxnSizeProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [txnSize, setTxnSize] = useState(225)

  return (
    <TxnSizeContext.Provider value={{ txnSize, setTxnSize }}>
      {children}
    </TxnSizeContext.Provider>
  )
}

export default TxnSizeProvider

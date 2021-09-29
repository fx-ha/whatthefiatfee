import { useState, createContext } from 'react'

type FiatContextType = {
  currency: string
  setCurrency: (currency: string) => void
}

export const FiatContext = createContext({} as FiatContextType)

const FiatProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [currency, setCurrency] = useState('usd')

  return (
    <FiatContext.Provider value={{ currency, setCurrency }}>
      {children}
    </FiatContext.Provider>
  )
}

export default FiatProvider

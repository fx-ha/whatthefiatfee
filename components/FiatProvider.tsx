import React from 'react'
import { useState, createContext } from 'react'

type FiatContextType = {
  currency: string
  setCurrency: (value: string) => void
}

export const FiatContext = createContext<FiatContextType>(undefined)

const FiatProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [currency, setCurrency] = useState('usd')

  return (
    <FiatContext.Provider value={{ currency, setCurrency }}>
      {children}
    </FiatContext.Provider>
  )
}

export default FiatProvider

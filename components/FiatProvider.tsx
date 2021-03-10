import { useState, createContext } from 'react'

export const FiatContext = createContext(undefined)

const FiatProvider = ({ children }): JSX.Element => {
  const [currency, setCurrency] = useState('usd')

  const updateSelection = (currency: string) => {
    setCurrency(currency)
  }

  return (
    <FiatContext.Provider value={{ currency, updateSelection }}>
      {children}
    </FiatContext.Provider>
  )
}

export default FiatProvider

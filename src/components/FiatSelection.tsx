import { IconButton, Stack } from '@chakra-ui/react'
import { useContext } from 'react'
import { BiBitcoin, BiDollar, BiEuro, BiPound } from 'react-icons/bi'
import { FiatContext } from '../context/FiatContext'

const FiatSelection = () => {
  const { currency, setCurrency } = useContext(FiatContext)

  return (
    <Stack direction="row" spacing={0.5}>
      <IconButton
        isActive={currency === 'btc'}
        variant="outline"
        colorScheme="orange"
        aria-label="BTC"
        fontSize="20px"
        icon={<BiBitcoin />}
        size="sm"
        onClick={() => setCurrency('btc')}
      />
      <IconButton
        isActive={currency === 'usd'}
        variant="outline"
        colorScheme="orange"
        aria-label="USD"
        fontSize="20px"
        icon={<BiDollar />}
        size="sm"
        onClick={() => setCurrency('usd')}
      />
      <IconButton
        isActive={currency === 'eur'}
        variant="outline"
        colorScheme="orange"
        aria-label="EUR"
        fontSize="20px"
        icon={<BiEuro />}
        size="sm"
        onClick={() => setCurrency('eur')}
      />
      <IconButton
        isActive={currency === 'gbp'}
        variant="outline"
        colorScheme="orange"
        aria-label="GBP"
        fontSize="20px"
        icon={<BiPound />}
        size="sm"
        onClick={() => setCurrency('gbp')}
      />
    </Stack>
  )
}

export default FiatSelection

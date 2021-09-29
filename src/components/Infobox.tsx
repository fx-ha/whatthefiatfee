import { Box, Text } from '@chakra-ui/layout'
import { formatDistanceToNow } from 'date-fns'
import { useContext } from 'react'
import { FiatContext } from '../context/FiatContext'
import { Rate } from '../generated/graphql'

const Infobox = ({ rate }: { rate: Rate }) => {
  const { currency } = useContext(FiatContext)

  let fiatValue = rate.usd.toLocaleString('en-US', {
    style: 'currency',
    currency: 'usd',
  })

  switch (currency) {
    case 'eur':
      fiatValue = rate.eur.toLocaleString('de-DE', {
        style: 'currency',
        currency,
      })
      break
    case 'gbp':
      fiatValue = rate.gbp.toLocaleString('en-GB', {
        style: 'currency',
        currency,
      })
      break
  }

  return (
    <Box>
      <Text>
        Last update:{' '}
        {formatDistanceToNow(new Date(Number(rate.updatedAt)), {
          addSuffix: true,
        })}
      </Text>
      <Text>1 BTC = {fiatValue}</Text>
    </Box>
  )
}

export default Infobox

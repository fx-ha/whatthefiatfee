import { useContext } from 'react'
import NextLink from 'next/link'
import {
  Button,
  Heading,
  IconButton,
  Flex,
  Stack,
  Spacer,
  useColorMode,
  Text,
  Box,
} from '@chakra-ui/react'
import {
  BiBitcoin,
  BiDollar,
  BiEuro,
  BiPound,
  BiSun,
  BiMoon,
} from 'react-icons/bi'
import { formatDistanceToNow } from 'date-fns'
import { FiatContext } from '../context/FiatContext'
import { TxnSizeSlider } from '.'
import { Rate } from '../generated/graphql'

type HeaderProps = {
  rate: Rate
  heading: string
  btnText: string
  href: string
}

const Header = ({ rate, heading, btnText, href }: HeaderProps) => {
  const { currency, setCurrency } = useContext(FiatContext)
  const { colorMode, toggleColorMode } = useColorMode()

  const isDark = colorMode === 'dark'

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
    <>
      <Flex marginTop={5}>
        <Heading as="h1" fontSize={{ base: 'md', sm: '3xl' }}>
          {heading}
        </Heading>
        <Spacer />
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
      </Flex>
      <Flex marginTop={2} alignItems="flex-start">
        <Box>
          <Text>
            Last update:{' '}
            {formatDistanceToNow(new Date(Number(rate.updatedAt)), {
              addSuffix: true,
            })}
          </Text>
          <Text>1 BTC = {fiatValue}</Text>
        </Box>
        <Spacer />
        <Stack direction="row" spacing={0.5}>
          <IconButton
            variant="ghost"
            colorScheme="orange"
            aria-label="darkmode switch"
            fontSize="20px"
            icon={isDark ? <BiSun /> : <BiMoon />}
            size="sm"
            onClick={toggleColorMode}
          />
          <NextLink href={href}>
            <Button
              size="sm"
              colorScheme="orange"
              variant="outline"
              alignSelf="end"
            >
              {btnText}
            </Button>
          </NextLink>
        </Stack>
      </Flex>
      <Box marginTop={3}>
        <TxnSizeSlider />
      </Box>
    </>
  )
}

export default Header

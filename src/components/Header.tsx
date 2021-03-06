import NextLink from 'next/link'
import {
  Button,
  Heading,
  IconButton,
  Flex,
  Stack,
  Spacer,
  useColorMode,
  Box,
} from '@chakra-ui/react'
import { BiSun, BiMoon } from 'react-icons/bi'
import { FiatSelection, Infobox, TxnSizeSlider } from '.'
import { Rate } from '../generated/graphql'

type HeaderProps = {
  rate: Rate
  heading: string
  btnText: string
  href: string
}

const Header = ({ rate, heading, btnText, href }: HeaderProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <>
      <Flex mt={5}>
        <Heading as="h1" fontSize={{ base: 'md', sm: '3xl' }}>
          {heading}
        </Heading>
        <Spacer />
        <FiatSelection />
      </Flex>

      <Flex mt={4} alignItems="flex-start">
        <Infobox rate={rate} />
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
            <Button size="sm" colorScheme="orange" variant="outline">
              {btnText}
            </Button>
          </NextLink>
        </Stack>
      </Flex>

      <Box mt={4}>
        <TxnSizeSlider />
      </Box>
    </>
  )
}

export default Header

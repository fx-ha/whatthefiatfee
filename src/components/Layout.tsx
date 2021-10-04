import Head from 'next/head'
import {
  Box,
  Container,
  Divider,
  Flex,
  Icon,
  Link,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export const siteTitle = 'WhatTheFiatFee'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bitcoin transaction fee estimation in fiat"
        />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>

      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        height="100vh"
      >
        <Container as="main" maxW="3xl">
          {children}
        </Container>

        <Container as="footer" maxW="3xl" mt="auto">
          <Divider mb={1} />

          <Box mb={1} textAlign="center">
            <Tooltip label="Code on Github">
              <Link isExternal href="https://github.com/fx-ha/whatthefiatfee">
                <Icon as={FaGithub} />
              </Link>
            </Tooltip>
          </Box>
        </Container>
      </Flex>
    </>
  )
}

export default Layout

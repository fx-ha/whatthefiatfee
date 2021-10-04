import Head from 'next/head'
import { Container, Flex, useColorMode } from '@chakra-ui/react'
import { Footer } from '.'

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
        minHeight="100vh"
      >
        <Container as="main" maxW="3xl">
          {children}
        </Container>

        <Footer />
      </Flex>
    </>
  )
}

export default Layout

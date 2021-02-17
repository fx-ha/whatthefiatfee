import Head from 'next/head'

import { Container } from 'react-bootstrap'

export const siteTitle = 'WhatTheFiatFee'

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Bitcoin transaction fees in fiat" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <Container as="main" className="mt-3" fluid={true}>
        {children}
      </Container>
    </>
  )
}

export default Layout

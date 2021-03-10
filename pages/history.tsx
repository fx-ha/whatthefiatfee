import Head from 'next/head'
import dynamic from 'next/dynamic'

import Layout from '../components/Layout'

const Chart = dynamic(() => import('../components/Chart'), { ssr: false })

const history = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>WhatTheFiatFee | History </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="WhatTheFiatFee | History" />
        <meta name="description" content="Bitcoin fee history" />
      </Head>
      <main>
        <Chart />
      </main>
    </Layout>
  )
}

export default history

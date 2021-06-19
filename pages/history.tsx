import Head from 'next/head'
import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'

import Layout from '../components/Layout'
import Header from '../components/Header'
import TxnSizeSlider from '../components/TxnSizeSlider'
import { HistoricalDataType } from '../lib/types'

const Chart = dynamic(() => import('../components/Chart'), { ssr: false })

const history = ({
  historicalData,
}: {
  historicalData: HistoricalDataType[]
}): JSX.Element => {
  const currentData = {
    usd: historicalData[0].usd,
    eur: historicalData[0].eur,
    gbp: historicalData[0].gbp,
    updated_at: historicalData[0].date,
  }
  return (
    <Layout>
      <Head>
        <title>WhatTheFiatFee | History</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="WhatTheFiatFee | History" />
        <meta name="description" content="Bitcoin fee history" />
      </Head>

      <Header
        currentData={currentData}
        heading="BTC fee history"
        btnText="Future"
        href="/"
      />
      <TxnSizeSlider />
      <Chart historicalData={historicalData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}/whatthefiatfee/historicaldata/`
  )
  const historicalData = await res.json()

  return {
    props: {
      historicalData,
    },
    revalidate: 21600, // every six hours
  }
}

export default history

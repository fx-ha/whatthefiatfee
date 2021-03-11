import { useContext } from 'react'

import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout from '../components/Layout'
import Header from '../components/Header'
import FeeTable from '../components/FeeTable'
import TxnSizeSlider from '../components/TxnSizeSlider'
import { FiatContext } from '../components/FiatProvider'
import { TxnSizeContext } from '../components/TxnSizeProvider'
import { CurrentDataType } from '../lib/types'

const Home = ({
  fees,
  currentData,
}: {
  fees: { fee: number }[]
  currentData: CurrentDataType[]
}): JSX.Element => {
  const { currency } = useContext(FiatContext)
  const { txnSize } = useContext(TxnSizeContext)

  return (
    <Layout>
      <Head>
        <title>WhatTheFiatFee</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="WhatTheFiatFee" />
        <meta name="description" content="Bitcoin fee estimation in fiat" />
      </Head>

      <main>
        <Header
          currentData={currentData[0]}
          heading="BTC fee estimation"
          btnText="History"
          href="/history"
        />
        <TxnSizeSlider />
        <FeeTable
          fees={fees}
          currentData={currentData}
          txnSize={txnSize}
          currency={currency}
        />
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const feeRes = await fetch(`${process.env.API_URL}/whatthefiatfee/fees/`)
  const fees = await feeRes.json()

  const currentDataRes = await fetch(
    `${process.env.API_URL}/whatthefiatfee/currentdata/`
  )
  const currentData = await currentDataRes.json()

  return {
    props: {
      fees,
      currentData,
    },
    revalidate: 1800,
  }
}

export default Home

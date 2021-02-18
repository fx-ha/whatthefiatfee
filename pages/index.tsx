import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout from '../components/Layout'
import Infobox from '../components/Infobox'
import FeeTable from '../components/FeeTable'

export default function Home({
  fees,
  currentData,
}: {
  fees: { fee: number }[]
  currentData: {
    usd: number
    eur: number
    gbp: number
    median_txn_size: number
    updated_at: string
  }[]
}): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>WhatTheFiatFee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Infobox currentData={currentData} currency="usd" />
        <FeeTable fees={fees} currentData={currentData} currency="usd" />
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
    revalidate: 3000,
  }
}

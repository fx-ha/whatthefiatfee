import Head from 'next/head'
import { GetStaticProps } from 'next'

import Layout from '../components/Layout'
import Infobox from '../components/Infobox'
import FeeTable from '../components/FeeTable'
import { Form } from 'react-bootstrap'
import React from 'react'

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
  const [state, setState] = React.useState({
    txnSize: Math.round(currentData[0].median_txn_size),
  })
  return (
    <Layout>
      <Head>
        <title>WhatTheFiatFee</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="WhatTheFiatFee" />
        <meta name="description" content="Bitcoin fee estimation in fiat" />
      </Head>

      <main>
        <Infobox currentData={currentData} currency="usd" />
        <Form.Group controlId="feeRange">
          <Form.Label>Transaction size: {state.txnSize} vbytes</Form.Label>
          <Form.Control
            type="range"
            min="100"
            max="1000"
            value={state.txnSize}
            step="25"
            onChange={handleChange}
          />
        </Form.Group>
        <FeeTable
          fees={fees}
          currentData={currentData}
          txnSize={state.txnSize}
          currency="usd"
        />
      </main>
    </Layout>
  )

  function handleChange(evt: { target: { value: string } }) {
    setState({ txnSize: parseInt(evt.target.value) })
  }
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
    //revalidate: 2000,
  }
}

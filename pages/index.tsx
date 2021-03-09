import { useState } from 'react'

import Head from 'next/head'
import { GetStaticProps } from 'next'

import {
  Col,
  Form,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from 'react-bootstrap'

import Layout from '../components/Layout'
import FeeTable from '../components/FeeTable'
import Infobox from '../components/Infobox'

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
  const [txnSize, setTxnSize] = useState(225)
  const [currency, setCurrency] = useState('usd')

  return (
    <Layout>
      <Head>
        <title>WhatTheFiatFee</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="WhatTheFiatFee" />
        <meta name="description" content="Bitcoin fee estimation in fiat" />
      </Head>

      <main>
        <Row>
          <Col xs={8}>
            <h1>BTC fee estimation in {currency.toUpperCase()}</h1>
          </Col>
          <Col className="text-right">
            <ToggleButtonGroup
              type="radio"
              name="options"
              size="sm"
              defaultValue="usd"
              onChange={(e) => setCurrency(e)}
            >
              <ToggleButton variant="outline-secondary" value="usd">
                $
              </ToggleButton>
              <ToggleButton variant="outline-secondary" value="eur">
                €
              </ToggleButton>
              <ToggleButton variant="outline-secondary" value="gbp">
                £
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
        <Infobox currentData={currentData} currency={currency} />
        <Form.Group controlId="feeRange">
          <Form.Label>Transaction size: {txnSize} vbytes</Form.Label>
          <Form.Control
            type="range"
            min="100"
            max="1000"
            value={txnSize}
            step="25"
            onChange={(e) => setTxnSize(Number(e.target.value))}
          />
        </Form.Group>
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

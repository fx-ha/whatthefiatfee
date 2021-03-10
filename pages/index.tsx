import { useState } from 'react'
import { useContext } from 'react'

import Head from 'next/head'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Col, Form, Row } from 'react-bootstrap'

import Layout from '../components/Layout'
import FeeTable from '../components/FeeTable'
import Infobox from '../components/Infobox'
import { FiatContext } from '../components/FiatProvider'
import FiatSelection from '../components/FiatSelection'

const Home = ({
  fees,
  currentData,
}: {
  fees: { fee: number }[]
  currentData: {
    usd: number
    eur: number
    gbp: number
    updated_at: string
  }[]
}): JSX.Element => {
  const [txnSize, setTxnSize] = useState(225)
  const { currency } = useContext(FiatContext)

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
          <Col xs={7}>
            <h1>Bitcoin fee estimation</h1>
          </Col>
          <Col className="text-right">
            <FiatSelection />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col>
            <Infobox currentData={currentData} currency={currency} />
          </Col>
        </Row>
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
        <Row>
          <Col>
            <Link href="/history">
              <a>History</a>
            </Link>
          </Col>
        </Row>
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

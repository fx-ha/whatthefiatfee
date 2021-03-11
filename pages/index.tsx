import { useContext } from 'react'

import Head from 'next/head'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Col, Row } from 'react-bootstrap'

import Layout from '../components/Layout'
import FeeTable from '../components/FeeTable'
import Infobox from '../components/Infobox'
import FiatSelection from '../components/FiatSelection'
import TxnSizeSlider from '../components/TxnSizeSlider'
import { FiatContext } from '../components/FiatProvider'
import { TxnSizeContext } from '../components/TxnSizeProvider'

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
        <Row>
          <Col xs={7}>
            <h1>Bitcoin fee estimation</h1>
          </Col>
          <Col className="text-right">
            <FiatSelection />
          </Col>
        </Row>
        <Row className="mt-2 mb-3">
          <Col>
            <Infobox currentData={currentData[0]} />
          </Col>
          <Col className="text-right">
            <Link href="/history">
              <a className="btn btn-sm btn-outline-secondary" role="button">
                History
              </a>
            </Link>
          </Col>
        </Row>
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

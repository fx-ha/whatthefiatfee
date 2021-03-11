import Head from 'next/head'
import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Col, Row } from 'react-bootstrap'

import Layout from '../components/Layout'
import FiatSelection from '../components/FiatSelection'
import TxnSizeSlider from '../components/TxnSizeSlider'
import Infobox from '../components/Infobox'

const Chart = dynamic(() => import('../components/Chart'), { ssr: false })

const history = ({
  historicalData,
}: {
  historicalData: {
    usd: number
    eur: number
    gbp: number
    date: string
    min_fee: number
    max_fee: number
    median_fee: number
  }[]
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

      <main>
        <Row>
          <Col xs={7}>
            <h1>Bitcoin fee history</h1>
          </Col>
          <Col className="text-right">
            <FiatSelection />
          </Col>
        </Row>
        <Row className="mt-2 mb-3">
          <Col xs={8}>
            <Infobox currentData={currentData} />
          </Col>
          <Col xs={4} className="text-right">
            <Link href="/">
              <a className="btn btn-sm btn-outline-secondary" role="button">
                Future
              </a>
            </Link>
          </Col>
        </Row>
        <TxnSizeSlider />
        <Row>
          <Col>
            <Chart historicalData={historicalData} />
          </Col>
        </Row>
      </main>
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

import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Col, Row } from 'react-bootstrap'

import Layout from '../components/Layout'
import FiatSelection from '../components/FiatSelection'

const Chart = dynamic(() => import('../components/Chart'), { ssr: false })

const history = (): JSX.Element => {
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
        <Row className="mt-4 mb-4">
          <Col>
            <Chart />
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Col>
        </Row>
      </main>
    </Layout>
  )
}

export default history

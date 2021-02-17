import Head from 'next/head'
import { GetStaticProps } from 'next'

import Table from 'react-bootstrap/Table'

import Layout from '../components/Layout'

export default function Home({
  fees,
}: {
  fees: { fee: number }[]
}): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>WhatTheFiatFee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mb-4">
          Last updated: table_data.1.updated_at
          <br />
          Transaction fee in USD for a median transaction size of 500 bytes
        </div>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th></th>
              <th>5%</th>
              <th>20%</th>
              <th>50%</th>
              <th>80%</th>
              <th>95%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>0.5</th>
              {fees.slice(0, 5).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
            <tr>
              <th>1h</th>
              {fees.slice(5, 10).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
            <tr>
              <th>1.5</th>
              {fees.slice(10, 15).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
            <tr>
              <th>2h</th>
              {fees.slice(15, 20).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
            <tr>
              <th>3h</th>
              {fees.slice(20, 25).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
            <tr>
              <th>4h</th>
              {fees.slice(25, 30).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
            <tr>
              <th>6h</th>
              {fees.slice(30, 35).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
            <tr>
              <th>8h</th>
              {fees.slice(35, 40).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
            <tr>
              <th>12h</th>
              {fees.slice(40, 45).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
            <tr>
              <th>16h</th>
              {fees.slice(45, 50).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
            <tr>
              <th>24h</th>
              {fees.slice(50, 55).map((fee: { fee: number }, i: number) => {
                return <td key={i}>{fee.fee}</td>
              })}
            </tr>
          </tbody>
        </Table>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/whatthefiatfee/fees/`)
  const fees = await res.json()
  return {
    props: {
      fees,
    },
    revalidate: 3000,
  }
}

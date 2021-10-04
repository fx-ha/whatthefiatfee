import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { FeeHistory } from '../generated/graphql'
import { Header, Layout, Chart } from '../components'

const History = ({ feeHistory }: { feeHistory: FeeHistory[] }) => {
  return (
    <Layout>
      <Header
        rate={{
          id: feeHistory[feeHistory.length - 1].id,
          eur: feeHistory[feeHistory.length - 1].eur,
          usd: feeHistory[feeHistory.length - 1].usd,
          gbp: feeHistory[feeHistory.length - 1].gbp,
          updatedAt: feeHistory[feeHistory.length - 1].createdAt,
        }}
        heading="BTC fee history"
        btnText="Future"
        href="/"
      />

      <Box overflowX="auto" mt={2}>
        <Chart feeHistory={feeHistory} />
      </Box>
    </Layout>
  )
}

const client = new ApolloClient({
  uri: 'https://whatthefiatfee.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query FeeHistory {
        getFeeHistory {
          id
          maxFee
          midFee
          minFee
          usd
          eur
          gbp
          createdAt
        }
      }
    `,
  })

  const { getFeeHistory: feeHistory } = data

  return {
    props: {
      feeHistory,
    },
    revalidate: 1800,
  }
}

export default History

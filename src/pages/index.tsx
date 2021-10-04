import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/react'
import { Fee, Rate } from '../generated/graphql'
import { Header, Layout, FeeTable } from '../components'

const Index = ({ fees, rate }: { fees: Fee[]; rate: Rate }) => {
  return (
    <Layout>
      <Header
        rate={rate}
        heading="BTC fee estimation"
        btnText="History"
        href="/history"
      />

      <Box overflowX="auto" mt={3}>
        <FeeTable fees={fees} rate={rate} />
      </Box>

      <Flex mt={1}>
        <Spacer />
        <Text color="GrayText" fontSize="xs">
          Fee estimates by{' '}
          <Link href="https://whatthefee.io" isExternal>
            WhatTheFee.io
          </Link>
        </Text>
      </Flex>
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
      query FeesAndRate {
        getFees {
          amount
          id
          probability
          time
        }
        getRate {
          eur
          gbp
          id
          updatedAt
          usd
        }
      }
    `,
  })

  const { getFees: fees, getRate: rate } = data

  return {
    props: {
      fees,
      rate,
    },
    revalidate: 1800,
  }
}

export default Index

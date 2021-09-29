import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { Flex, Container, Spacer, Box, Text, Link } from '@chakra-ui/react'
import { Fee, Rate } from '../generated/graphql'
import { Header, Layout, FeeTable } from '../components'

const Index = ({ fees, rate }: { fees: Fee[]; rate: Rate }) => {
  return (
    <Layout>
      <Container as="main" maxW="3xl">
        <Header
          rate={rate}
          heading="BTC fee estimation"
          btnText="History"
          href="/history"
        />
        <Box overflowX="auto" marginTop={2}>
          <FeeTable fees={fees} rate={rate} />
        </Box>
        <Flex marginTop={1}>
          <Spacer />
          <Text color="GrayText" fontSize="xs">
            Fee estimates by{' '}
            <Link href="https://whatthefee.io" isExternal>
              WhatTheFee.io
            </Link>
          </Text>
        </Flex>
      </Container>
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

import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://whatthefiatfee.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

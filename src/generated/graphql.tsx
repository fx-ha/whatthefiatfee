import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Fee = {
  __typename?: 'Fee'
  amount: Scalars['Float']
  id: Scalars['Float']
  probability: Scalars['Float']
  time: Scalars['Float']
}

export type FeeHistory = {
  __typename?: 'FeeHistory'
  createdAt: Scalars['String']
  eur: Scalars['Float']
  gbp: Scalars['Float']
  id: Scalars['Float']
  maxFee: Scalars['Float']
  midFee: Scalars['Float']
  minFee: Scalars['Float']
  usd: Scalars['Float']
}

export type Query = {
  __typename?: 'Query'
  getFeeHistory: Array<FeeHistory>
  getFees: Array<Fee>
  getRate: Rate
}

export type Rate = {
  __typename?: 'Rate'
  eur: Scalars['Float']
  gbp: Scalars['Float']
  id: Scalars['Float']
  updatedAt: Scalars['String']
  usd: Scalars['Float']
}

export type FeesQueryVariables = Exact<{ [key: string]: never }>

export type FeesQuery = {
  __typename?: 'Query'
  getFees: Array<{
    __typename?: 'Fee'
    amount: number
    id: number
    probability: number
    time: number
  }>
}

export type FeeHistoryQueryVariables = Exact<{ [key: string]: never }>

export type FeeHistoryQuery = {
  __typename?: 'Query'
  getFeeHistory: Array<{
    __typename?: 'FeeHistory'
    createdAt: string
    eur: number
    gbp: number
    id: number
    maxFee: number
    midFee: number
    minFee: number
    usd: number
  }>
}

export type RateQueryVariables = Exact<{ [key: string]: never }>

export type RateQuery = {
  __typename?: 'Query'
  getRate: {
    __typename?: 'Rate'
    eur: number
    gbp: number
    id: number
    updatedAt: string
    usd: number
  }
}

export const FeesDocument = gql`
  query Fees {
    getFees {
      amount
      id
      probability
      time
    }
  }
`

/**
 * __useFeesQuery__
 *
 * To run a query within a React component, call `useFeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeesQuery(
  baseOptions?: Apollo.QueryHookOptions<FeesQuery, FeesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FeesQuery, FeesQueryVariables>(FeesDocument, options)
}
export function useFeesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeesQuery, FeesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FeesQuery, FeesQueryVariables>(
    FeesDocument,
    options
  )
}
export type FeesQueryHookResult = ReturnType<typeof useFeesQuery>
export type FeesLazyQueryHookResult = ReturnType<typeof useFeesLazyQuery>
export type FeesQueryResult = Apollo.QueryResult<FeesQuery, FeesQueryVariables>
export const FeeHistoryDocument = gql`
  query FeeHistory {
    getFeeHistory {
      createdAt
      eur
      gbp
      id
      maxFee
      midFee
      minFee
      usd
    }
  }
`

/**
 * __useFeeHistoryQuery__
 *
 * To run a query within a React component, call `useFeeHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeeHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeeHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeeHistoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FeeHistoryQuery,
    FeeHistoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FeeHistoryQuery, FeeHistoryQueryVariables>(
    FeeHistoryDocument,
    options
  )
}
export function useFeeHistoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FeeHistoryQuery,
    FeeHistoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FeeHistoryQuery, FeeHistoryQueryVariables>(
    FeeHistoryDocument,
    options
  )
}
export type FeeHistoryQueryHookResult = ReturnType<typeof useFeeHistoryQuery>
export type FeeHistoryLazyQueryHookResult = ReturnType<
  typeof useFeeHistoryLazyQuery
>
export type FeeHistoryQueryResult = Apollo.QueryResult<
  FeeHistoryQuery,
  FeeHistoryQueryVariables
>
export const RateDocument = gql`
  query Rate {
    getRate {
      eur
      gbp
      id
      updatedAt
      usd
    }
  }
`

/**
 * __useRateQuery__
 *
 * To run a query within a React component, call `useRateQuery` and pass it any options that fit your needs.
 * When your component renders, `useRateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRateQuery({
 *   variables: {
 *   },
 * });
 */
export function useRateQuery(
  baseOptions?: Apollo.QueryHookOptions<RateQuery, RateQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<RateQuery, RateQueryVariables>(RateDocument, options)
}
export function useRateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RateQuery, RateQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<RateQuery, RateQueryVariables>(
    RateDocument,
    options
  )
}
export type RateQueryHookResult = ReturnType<typeof useRateQuery>
export type RateLazyQueryHookResult = ReturnType<typeof useRateLazyQuery>
export type RateQueryResult = Apollo.QueryResult<RateQuery, RateQueryVariables>

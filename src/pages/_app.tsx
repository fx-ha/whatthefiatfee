import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { FiatProvider, TxnSizeProvider } from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <TxnSizeProvider>
        <FiatProvider>
          <Component {...pageProps} />
        </FiatProvider>
      </TxnSizeProvider>
    </ChakraProvider>
  )
}

export default MyApp

import { AppProps } from 'next/dist/next-server/lib/router/router'
import FiatProvider from '../components/FiatProvider'
import TxnSizeProvider from '../components/TxnSizeProvider'

import '../styles/globals.sass'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <TxnSizeProvider>
      <FiatProvider>
        <Component {...pageProps} />
      </FiatProvider>
    </TxnSizeProvider>
  )
}

export default MyApp

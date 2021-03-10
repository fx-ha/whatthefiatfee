import { AppProps } from 'next/dist/next-server/lib/router/router'
import FiatProvider from '../components/FiatProvider'

import '../styles/globals.sass'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <FiatProvider>
      <Component {...pageProps} />
    </FiatProvider>
  )
}

export default MyApp

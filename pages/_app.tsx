import { AppProps } from 'next/dist/next-server/lib/router/router'
// import { FiatSelectionProvider } from '../components/AppContext'

import '../styles/globals.sass'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    // <FiatSelectionProvider>
    <Component {...pageProps} />
    // </FiatSelectionProvider>
  )
}

export default MyApp

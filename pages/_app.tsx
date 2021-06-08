import { AppProps } from 'next/app'

function NextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default NextApp

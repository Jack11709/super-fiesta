import { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>South Coast Bagel Company</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    height: 100%;
    margin:0 auto;
    padding: 0;
    font-family: 'Amatic SC', cursive;
  }

  body{
    min-height:100vh;
    margin: 0;
  }
`

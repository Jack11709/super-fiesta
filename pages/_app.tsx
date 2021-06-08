import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
    font-family: 'Roboto Mono', monospace;
  }

  body{
    min-height:100vh;
    margin: 0;
  }
`

import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/bagel.ico" />
          <meta
            name="description"
            content="Website for the South Coast Bagel Company and the Bagel Man"
          />
          <meta property="og:title" content="South Coast Bagel Company" key="ogtitle" />
          <meta
            property="og:description"
            content="Website for the South Coast Bagel Company and the Bagel Man"
            key="ogdesc"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

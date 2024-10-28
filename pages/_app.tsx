import type { AppProps } from 'next/app'

import Page from '../components/Page'
import { Inter } from 'next/font/google'

import '../globals.css'

const inter = Inter({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}
export default App

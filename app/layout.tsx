import type { Metadata } from 'next'
import Page from '../components/Page'
import { Inter } from 'next/font/google'
import '../globals.css'
import Script from 'next/script'
import InfoBar from './InfoBar'

const inter = Inter({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'block',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Acme Store',
  description: 'list of local restaurants',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-410V9W6CWJ"
        ></Script>

        <Script
          strategy="beforeInteractive"
          id="GTM-script"
          dangerouslySetInnerHTML={{
            __html: `

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-410V9W6CWJ');

              `,
          }}
        />
      </head>
      <body>
        <InfoBar />
        <Page>{children}</Page>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import Page from '../components/Page'
import { Inter } from 'next/font/google'
import '../globals.css'
import Script from 'next/script'

const inter = Inter({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
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
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-410V9W6CWJ"
        ></Script>

        <Script
          strategy="lazyOnload"
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
        <Page>{children}</Page>
      </body>
    </html>
  )
}

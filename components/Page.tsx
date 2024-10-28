import React, { Suspense } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Image from 'next/legacy/image'

import Stack from './Stack'
import Text from './Text'
import Card from './Card'

const DynamicFooter = dynamic(() => import('./Footer'), {
  ssr: false,
})

interface Props {
  children: React.ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <Stack
      alignItems="stretch"
      style={{
        minHeight: '100vh',
        maxWidth: '56rem',
        width: '100%',
        margin: 'auto',
        padding: 24,
      }}
    >
      <header>
        <Card>
          <Link href="/">
            <Stack alignItems="center" direction="row" gap={6} padding={12}>
              <Image alt="ACME stores" height={32} src="/acme.svg" width={32} />
              <Text color="white" size={16} weight="bold">
                ACME Stores
              </Text>
            </Stack>
          </Link>
        </Card>
      </header>
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

      <Head>
        <title>Restaurant Catalog</title>
        <meta content="list of local restaurants" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main style={{ flex: 1 }}>
        <Card>
          <Stack
            alignItems="center"
            justifyContent="center"
            padding={24}
            style={{
              width: '100%',
              flex: 1,
            }}
          >
            {children}
          </Stack>
        </Card>
      </main>

      <Suspense fallback={`Loading...`}>
        <DynamicFooter />
      </Suspense>
    </Stack>
  )
}

export default Page

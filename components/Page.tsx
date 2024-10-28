import React, { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './Footer'
import Stack from './Stack'
import Text from './Text'
import Card from './Card'

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
        <Footer />
      </Suspense>
    </Stack>
  )
}

export default Page

'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import now from 'lodash/now'

import Stack from './Stack'
import Text from './Text'
import Card from './Card'

const Footer = () => {
  const [timeStamp, setTimeStamp] = useState(0)
  useEffect(() => {
    setTimeStamp(now())
  }, [])

  return (
    <footer>
      <Card>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          padding={12}
        >
          <Stack alignItems="center" direction="row" gap={4}>
            <Text>By</Text>{' '}
            <Image
              alt={`timestamp: ${timeStamp.toString()}`}
              height={16}
              src="/vercel.svg"
              width={72}
            />
          </Stack>
          <Stack alignItems="center" direction="row" gap={4}>
            <Image
              alt="Next.js logo"
              height={32}
              src="/nextjs.svg"
              width={32}
            />
            <p>SEO & Web Performance Workshop</p>
          </Stack>
        </Stack>
      </Card>
    </footer>
  )
}

export default Footer

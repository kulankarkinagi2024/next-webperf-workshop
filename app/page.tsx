import Link from 'next/link'

import type { Store } from '../types'

import api from '../api'

import Stack from '../components/Stack'
import StoreCard from '../components/StoreCard'

export default async function Home() {
  const stores: Store[] = await api.list()
  const featured = await api.hot()
  return (
    <Stack>
      <h1>Featured:</h1>
      <Link passHref key={featured.id} href={`/${featured.id}`}>
        <StoreCard store={featured} priority />
      </Link>
      <h1>All Restaurants:</h1>
      {stores.map((store, index) => (
        <Link passHref key={store.id} href={`/${store.id}`}>
          <StoreCard store={store} priority={index <= 3 ? true : false} />
        </Link>
      ))}
    </Stack>
  )
}

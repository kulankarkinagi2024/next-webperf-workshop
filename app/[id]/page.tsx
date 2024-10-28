import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Link from 'next/link'

import type { Store } from '../../types'
import api from '../../api'
import StoreCard from '../../components/StoreCard'

export async function generateStaticParams() {
  const list = await api.list()

  return list.map((store) => ({
    id: store.id,
  }))
}

export default async function StorePage(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const store: Store = await api.fetch(params.id)
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <StoreCard store={store} priority />
      <iframe
        allowFullScreen
        height="450"
        loading="lazy"
        src={store.location.map}
        style={{ border: 0, marginTop: 24 }}
        width="300"
      />
      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <Link href="/">Back</Link>
      </div>
    </div>
  )
}

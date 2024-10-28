import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import type { Store } from '../types'

import api from '../api'

import Stack from '../components/Stack'
import StoreCard from '../components/StoreCard'

interface Props {
  stores: Store[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const stores = await api.list()

  return {
    props: {
      stores,
    },
  }
}

const Home: NextPage<Props> = ({ stores }) => {
  return (
    <Stack>
      {stores.map((store, index) => (
        <Link passHref key={store.id} href={`/${store.id}`}>
          <StoreCard store={store} priority={index <= 3 ? true : false} />
        </Link>
      ))}
    </Stack>
  )
}

export default Home

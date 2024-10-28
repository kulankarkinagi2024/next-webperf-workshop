import type { Store } from '../types'
import Image from 'next/image'

import Stack from './Stack'
import Text from './Text'

interface Props {
  store: Store
  priority: boolean
}

const StoreCard: React.FC<Props> = ({ store, priority }) => {
  return (
    <Stack
      direction="row"
      alignItems="stretch"
      style={{
        width: '100%',
        margin: 'auto',
        padding: 5,
      }}
    >
      <Stack>
        <Image
          alt={store.title}
          src={store.image}
          sizes="20vw"
          width={100}
          height={100}
          priority={priority}
        />
      </Stack>

      <Stack>
        <Text color="light" size={20} weight="bold">
          {store.title}
        </Text>
        <Text size={14}>{store.description}</Text>
        <Text color="text-500" size={14}>
          ※ {store.location.address}
        </Text>
      </Stack>
    </Stack>
  )
}

export default StoreCard

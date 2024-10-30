import { MOCK } from './apiData'
import { Store } from './types'

async function sleep(ms: number): Promise<void> {
  await new Promise<void>((res) => setTimeout(res, ms))
}

const api = {
  list: async (): Promise<Store[]> => {
    // simulate a slow response
    await sleep(1000)

    return MOCK
  },
  fetch: async (id: string): Promise<Store> => {
    const store = MOCK.find((store) => store.id === id)

    // simulate a slow response
    await sleep(1000)

    if (!store) {
      throw new Error('Store not found')
    }

    return store
  },
  hot: async (): Promise<Store> => {
    const index = Math.floor(Math.random() * MOCK.length)

    // simulate a slow response
    await sleep(1000)

    return MOCK[index]
  },
  infoBanner: async (): Promise<string> => {
    // simulate a slow response
    await sleep(1000)
    return '10 New places available!'
  },
}

export default api

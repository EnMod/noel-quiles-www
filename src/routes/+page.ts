import query from './query'
import gqlr from '$lib/utils/gql-request'

export async function load() {
  const { molecules } = await gqlr(query)
  return { molecules }
}

import query from './query'
import gqlr from '$lib/utils/gql-request'

export async function load() {
  const { games } = await gqlr(query)
  return { games }
}

import query from './query'
import gqlr from '$lib/utils/gql-request'

export async function load() {
  const { websites } = await gqlr(query)
  return { websites }
}

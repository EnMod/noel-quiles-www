import query from './query'
import gqlr from '$lib/utils/gql-request'

export async function load() {
  const { writings } = await gqlr(query)
  return { writings }
}

import query from './query'
import gqlr from '$lib/utils/gql-request'

export async function load() {
  const { audios } = await gqlr(query)
  return { audios }
}

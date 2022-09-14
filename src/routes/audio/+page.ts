import query from './query'
import { mainGqlr } from '$lib/utils/gql-request'

export async function load() {
  const { audios } = await mainGqlr(query)
  return { audios }
}

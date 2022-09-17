import query from './query'
import { mainGqlr } from '$lib/utils/gql-request'

export async function load() {
  const { websites } = await mainGqlr(query)
  return { websites }
}

import query from './query'
import { mainGqlr } from '$lib/utils/gql-request'

export async function load() {
  const { games } = await mainGqlr(query)
  return { games }
}

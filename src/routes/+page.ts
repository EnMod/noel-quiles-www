import query from './query'
import { mainGqlr } from '$lib/utils/gql-request'

export async function load() {
  const { molecules } = await mainGqlr(query)
  return { molecules }
}

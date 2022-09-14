import query from './query'
import { mainGqlr } from '$lib/utils/gql-request'

export async function load() {
  const { writings } = await mainGqlr(query)
  return { writings }
}


import query from './query'
import { mainGqlr } from '$lib/utils/gql-request'

export async function load() {
  const { linkCategories } = await mainGqlr(query)
  return { linkCategories }
}

interface LinksPageProps {
  linkCategories: Array<{
    title: string
    theme: { title: string }
    links: Array<{
      title: string
      href: string
      target: string
    }>
  }>
}

import { blogGqlr } from '$lib/utils/gql-request'
import query from './query'

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load() {
  const { allPosts } = await blogGqlr(query)

  const publishedPosts = allPosts.filter((post) => post._status === 'published')

  return {
    posts: publishedPosts
  }
}

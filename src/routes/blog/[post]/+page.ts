import query from './query'
import gqlr from '$lib/utils/gql-request'
import { error } from '@sveltejs/kit'

export async function load({ params: { post: postSlug } }) {
  const { postData, allPosts } = await gqlr(query, { variables: { slug: postSlug }, type: 'blog' })

  const allPostSlugs = allPosts.map((post) => post.slug)

  if (allPostSlugs.indexOf(postData.slug) === -1) {
    throw error(404, 'Post not available')
  }

  return { title: postData.title, body: postData.body }
}

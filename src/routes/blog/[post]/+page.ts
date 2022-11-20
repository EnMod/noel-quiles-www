import query from './query'
import { error } from '@sveltejs/kit'
import { blogGqlr } from '$lib/utils/gql-request'

export async function load({ params: { post: postSlug } }) {
  const { postData, allPosts } = await blogGqlr(query, { slug: postSlug })

  const allPostSlugs = allPosts.map((post) => post.slug)

  if (allPostSlugs.indexOf(postData.slug) === -1) {
    throw error(404, 'Post not available')
  }

  return { title: postData.title, body: postData.body }
}

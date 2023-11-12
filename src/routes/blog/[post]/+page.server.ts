import query from './query'
import { cmsBlog } from '$lib/utils/gql-clients'
import { error } from '@sveltejs/kit'

export async function load({ params: { post: postSlug } }) {
	const {
		data: { postData, allPosts }
	} = await cmsBlog.query(query, {
		slug: postSlug
	})

	const allPostSlugs = allPosts.map((post) => post.slug)

	if (allPostSlugs.indexOf(postData.slug) === -1) {
		throw error(404, 'Post not available')
	}

	return { postData }
}

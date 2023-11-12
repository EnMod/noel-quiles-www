import query from './query'
import { cmsBlog } from '$lib/utils/gql-clients'

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load() {
	const {
		data: { allPosts }
	} = await cmsBlog.query(query, {})

	const publishedPosts = allPosts.filter((post) => post._status === 'published')

	return {
		posts: publishedPosts
	}
}

import { Client, cacheExchange, fetchExchange, setContextClient } from '@urql/svelte'
import { dev as isDev } from '$app/environment'
import {
	GQL_ENDPOINT_DEV,
	GQL_ENDPOINT_PROD,
	GQL_AUTH_MAIN,
	GQL_AUTH_BLOG
} from '$env/static/private'

let gqlEndpoint: string = isDev ? GQL_ENDPOINT_DEV : GQL_ENDPOINT_PROD

function createClient(type: 'main' | 'blog') {
	let authToken = ''

	switch (type) {
		case 'main':
			authToken = GQL_AUTH_MAIN
			break

		case 'main':
			authToken = GQL_AUTH_BLOG
			break

		default:
			break
	}

	const client = new Client({
		url: String(gqlEndpoint),
		fetchOptions: () => {
			return {
				headers: { Authorization: authToken ? `Bearer ${authToken}` : '' }
			}
		},

		exchanges: [cacheExchange, fetchExchange]
	})

	return client
}

export const cmsMain = createClient('main')

export const cmsBlog = createClient('blog')

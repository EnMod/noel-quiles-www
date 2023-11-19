import query from './query'
import { cmsMain } from '$lib/utils/gql-clients'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const {
		data: { websites }
	} = await cmsMain.query(query, {})
	return { websites }
}

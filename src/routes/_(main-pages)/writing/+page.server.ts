import query from './query'
import { cmsMain } from '$lib/utils/gql-clients'

export async function load() {
	const {
		data: { writings }
	} = await cmsMain.query(query, {})
	return { writings }
}

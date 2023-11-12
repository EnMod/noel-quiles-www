import query from './query'
import { cmsMain } from '$lib/utils/gql-clients'

export async function load() {
	const {
		data: { games }
	} = await cmsMain.query(query, {})
	return { games }
}

import query from './query'
import { cmsMain } from '$lib/utils/gql-clients'

export async function load() {
	const {
		data: { molecules }
	} = await cmsMain.query(query, {})
	return { molecules }
}

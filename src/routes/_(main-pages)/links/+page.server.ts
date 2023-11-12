import query from './query'
import { cmsMain } from '$lib/utils/gql-clients'

export async function load() {
	const {
		data: { linkCategories }
	} = await cmsMain.query(query, {})
	return { linkCategories }
}

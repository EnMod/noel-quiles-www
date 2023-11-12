import query from './query'
import { cmsMain } from '$lib/utils/gql-clients'

export async function load() {
	const {
		data: { audios }
	} = await cmsMain.query(query, {})
	return { audios }
}

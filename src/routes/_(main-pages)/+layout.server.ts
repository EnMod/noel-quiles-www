import { get } from 'svelte/store'
import { theme } from '$lib/stores'
import { cmsMain } from '$lib/utils/gql-clients'
import navQuery from './nav-query'

const SCHEME_MAP = new Map<string, string>([
	['websites', 'water'],
	['writing', 'earth'],
	['audio', 'wind'],
	['games', 'fire']
])

/** @type {import('./$types').ServerLoad} */
export async function load({ url }) {
	const slug = url.pathname.split('/')[1]
	// TODO Set appearance based on preferences
	theme.set({ appearance: get(theme).appearance, scheme: SCHEME_MAP.get(slug) || 'void' })

	// Fetch nav links
	const {
		data: { molecules }
	} = await cmsMain.query(navQuery, {})

	const navLinks = molecules.map((molecule) => {
		return { slug: molecule.slug, label: molecule.title }
	})

	return {
		navLinks
	}
}

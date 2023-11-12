import { get } from 'svelte/store'
import { theme } from '$lib/stores'
import { cmsMain } from '$lib/utils/gql-clients'
import navQuery from './nav-query'

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load({ url }) {
	const slug = url.pathname.split('/')[1]
	// TODO Set appearance based on preferences
	theme.set({ appearance: get(theme).appearance, scheme: slug })

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

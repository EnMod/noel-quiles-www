<script lang="ts">
	import { get } from 'svelte/store'
	import { theme } from '$lib/stores'
	import WritingIcon from '$lib/img/scheme-selector/writing.svelte'
	import WebsitesIcon from '$lib/img/scheme-selector/websites.svelte'
	import AudioIcon from '$lib/img/scheme-selector/audio.svelte'
	import GamesIcon from '$lib/img/scheme-selector/games.svelte'
	import NeutralIcon from '$lib/img/scheme-selector/neutral.svelte'

	let selectionsOpen = false
	const schemeOptions = ['websites', 'audio', 'games', 'writing', 'neutral']
	let selectedScheme = 'writing'

	function selectScheme(option) {
		theme.set({ appearance: get(theme).appearance, scheme: option })
		selectedScheme = option
		selectionsOpen = false
	}

	const SCHEME_ICON_MAP = {
		websites: WebsitesIcon,
		audio: AudioIcon,
		games: GamesIcon,
		writing: WritingIcon,
		neutral: NeutralIcon
	}
</script>

<div class="scheme-selector">
	<button
		on:click={() => {
			selectionsOpen = !selectionsOpen
		}}
	>
		<svelte:component this={SCHEME_ICON_MAP[selectedScheme]} />
	</button>
	{#if selectionsOpen}
		{#each schemeOptions as option}
			<button
				on:click={() => {
					selectScheme(option)
				}}
			>
				<svelte:component this={SCHEME_ICON_MAP[option]} />
			</button>
		{/each}
	{/if}
</div>

<style lang="postcss">
	button {
		width: 32px;
		height: 32px;
		border: 0;
		background: none;
		cursor: pointer;
		padding: 0;

		& svg {
			width: 100%;
		}
	}

	.scheme-selector {
		display: flex;
		gap: 0;
	}
</style>

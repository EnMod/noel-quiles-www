<script lang="ts">
	import { get } from 'svelte/store'
	import { theme } from '$lib/stores'
	import WaterIcon from '$lib/img/scheme-selector/water.svelte'
	import EarthIcon from '$lib/img/scheme-selector/earth.svelte'
	import WindIcon from '$lib/img/scheme-selector/wind.svelte'
	import FireIcon from '$lib/img/scheme-selector/fire.svelte'
	import VoidIcon from '$lib/img/scheme-selector/void.svelte'
	import type { ComponentType } from 'svelte'

	let selectionsOpen = false
	const schemeOptions = ['water', 'wind', 'fire', 'earth', 'void']
	let selectedScheme = 'earth'

	function selectScheme(option) {
		theme.set({ appearance: get(theme).appearance, scheme: option })
		selectedScheme = option
		selectionsOpen = false
	}

	const SCHEME_ICON_MAP = new Map<string, ComponentType>([
		['water', WaterIcon],
		['earth', EarthIcon],
		['wind', WindIcon],
		['fire', FireIcon],
		['void', VoidIcon]
	])
</script>

<div class="scheme-selector">
	<button
		on:click={() => {
			selectionsOpen = !selectionsOpen
		}}
	>
		<svelte:component this={SCHEME_ICON_MAP.get(selectedScheme)} />
	</button>
	{#if selectionsOpen}
		{#each schemeOptions as option}
			<button
				on:click={() => {
					selectScheme(option)
				}}
			>
				<svelte:component this={SCHEME_ICON_MAP.get(option)} />
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

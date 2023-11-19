<script lang="ts">
	import { theme } from '$lib/stores'
	import { tweened } from 'svelte/motion'
	import LightIcon from '$lib/img/appearance-toggle/light.svelte'
	import DarkIcon from '$lib/img/appearance-toggle/dark.svelte'
	import type { ComponentType } from 'svelte'

	let iconAppearance = getOppositeAppearance()

	const rotationValue = tweened(0, {
		duration: 150
	})

	function toggleAppearance() {
		animateToAppearance(getOppositeAppearance())
	}

	function animateToAppearance(appearance) {
		rotationValue.set(-90).then(() => {
			$theme.appearance = appearance
			iconAppearance = getOppositeAppearance()
			rotationValue.set(0)
		})
	}

	function getOppositeAppearance() {
		return $theme.appearance === 'light' ? 'dark' : 'light'
	}

	const APPEARANCE_ICON_MAP = new Map<string, ComponentType>([
		['light', LightIcon],
		['dark', DarkIcon]
	])
</script>

<button on:click={toggleAppearance}>
	<div class="icon" style="transform:rotateY({$rotationValue}deg)">
		<svelte:component this={APPEARANCE_ICON_MAP.get(iconAppearance)} />
	</div>
</button>

<style lang="postcss">
	button {
		--size: 32px;

		width: var(--size);
		height: var(--size);
		background: none;
		border: 0;
		padding: 0;
		cursor: pointer;
		perspective: 1200px;
	}

	.icon {
		width: var(--size);
		height: var(--size);
		transform-style: preserve-3d;
	}
</style>

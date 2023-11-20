<script lang="ts">
	import SectionHeading from './section-heading.svelte'
	import Image from './image.svelte'
	import Video from './video.svelte'
	import type { ComponentType } from 'svelte'

	const BLOCK_COMPONENT_MAP = new Map<string, ComponentType>([
		['SectionHeadingRecord', SectionHeading],
		['VideoRecord', Video],
		['ImageRecord', Image]
	])
</script>

<svelte:component this={BLOCK_COMPONENT_MAP.get($$props.block.__typename)} {...$$props.block} />

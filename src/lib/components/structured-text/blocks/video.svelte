<script lang="ts">
	import VideoPlayer from 'svelte-react-player'

	interface StructuredTextVideoProps {
		url: string
	}

	export let url: StructuredTextVideoProps['url']
</script>

<div class="structured-text-video">
	<VideoPlayer playIcon={true} fluid={true} width="100%" height="100%" {url} />
</div>

<style lang="postcss">
	.structured-text-video {
		aspect-ratio: 16 / 9;
		/* TODO Remove max width once a sensible post width is decided */
		/* TODO Or, keep but make configurable? 🤷*/
		max-width: 640px;
		margin: 0 auto;
		border-radius: var(--sz-02);
		overflow: hidden;
	}
</style>

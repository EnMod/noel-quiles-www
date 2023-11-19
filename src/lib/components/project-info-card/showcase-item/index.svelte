<script context="module" lang="ts">
	export interface ShowcaseItemProps {
		files: Array<{
			url: string
			alt?: string
			mimeType: string
		}>
		title?: string
	}
</script>

<script lang="ts">
	import MediaTemplate from '$lib/components/project-info-card/media-template.svelte'

	export let files: ShowcaseItemProps['files']

	const mimeCategory = files[0].mimeType.split('/')[0]
</script>

<!-- HTML -->
{#if mimeCategory === 'audio'}
	<!-- TODO Maybe apply some audio-specific CSS here -->
	<audio controls>
		<!-- TODO prepare lyrics for any hosted audio -->
		<track kind="captions" />
		<MediaTemplate type={mimeCategory} {files} />
	</audio>
{:else if mimeCategory === 'video'}
	<!-- TODO Maybe apply some video-specific CSS here -->
	<video controls>
		<!-- TODO prepare captions for any hosted videos -->
		<track kind="captions" />
		<MediaTemplate type={mimeCategory} {files} />
	</video>
{:else if mimeCategory === 'image'}
	<figure>
		<!-- TODO Add a srcSet here for breakpoints -->
		<MediaTemplate type={mimeCategory} {files} />
		<img src={files[0].url} alt={files[0].alt || 'Project image'} />
	</figure>
{/if}

<style>
	img {
		max-width: 100%;
	}
</style>

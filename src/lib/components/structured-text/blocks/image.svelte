<script lang="ts">
	interface StructuredTextImageProps {
		image: {
			url: string
			alt?: string
		}
		imagePosition?: 'left' | 'right' | 'center'
		caption?: string
	}

	export let image: StructuredTextImageProps['image']
	export let imagePosition: StructuredTextImageProps['imagePosition'] = 'center'
	export let caption: StructuredTextImageProps['caption'] = ''
</script>

<figure class="structured-text-image {imagePosition}">
	<img srcset={image.url} alt={image.alt} />

	{#if caption}
		<figcaption class="caption g-label">{caption}</figcaption>
	{/if}
</figure>

<style lang="postcss">
	.structured-text-image {
		margin: 0;
		display: grid;
		place-items: center;

		& img {
			max-width: 100%;
		}

		&.left {
			float: left;
			margin-right: var(--sz-05);
		}

		&.right {
			float: right;
			margin-left: var(--sz-05);
		}
	}

	.caption {
		padding-top: var(--sz-04);
		color: var(--void-5);
	}
</style>

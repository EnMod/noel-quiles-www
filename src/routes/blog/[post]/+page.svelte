<script lang="ts">
	import { StructuredText } from '@datocms/svelte'
	import { isBlock } from 'datocms-structured-text-utils'
	import Eyebrow from '$lib/components/eyebrow.svelte'
	import StructuredTextBlock from '$lib/components/structured-text/blocks/index.svelte'

	// TODO Type this
	export let data

	let { title, body, category } = data.postData
</script>

<div class="blog-post">
	<div class="details">
		<Eyebrow text={category.title} url={`category/${category.slug}`} />
	</div>

	<h1>{title}</h1>
	<StructuredText data={body} components={[[isBlock, StructuredTextBlock]]} />
</div>

<style lang="postcss">
	.blog-post {
		--padding-y: var(--sz-10);
		max-width: calc(var(--sz-10) * 10);
		margin: 0 auto;
		padding-top: var(--padding-y);
		padding-bottom: var(--padding-y);

		@media (--tablet-up) {
			--padding-y: var(--sz-14);
		}

		& :global(h1),
		& :global(h2),
		& :global(h3),
		& :global(h4),
		& :global(h5),
		& :global(h6) {
			margin-bottom: 0;
		}

		& :global(h1) {
			margin-top: 0;
		}

		& :global(p) {
			line-height: 1.6;
		}

		& :global(ul) {
			margin: 0;
			padding-left: var(--sz-07);

			& :global(li) {
				& :global(p) {
					margin: 0;
				}
			}
		}

		& :global(pre) {
			display: inline-block;
			white-space: normal;
			margin: 0;
			background-color: var(--text-highlight-color);
			padding: var(--sz-02);
			border-radius: var(--sz-01);
			line-height: 1;
		}

		& :global(a) {
			& :global(pre) {
				text-decoration: underline;
			}
		}
	}
</style>

<script lang="ts">
  import { isBlock } from 'datocms-structured-text-utils'
  import { render as renderStructuredText } from 'datocms-structured-text-to-html-string'
  import BlogVideo from './video.svelte'
  import BlogImage from './image.svelte'

  export let body

  const formattedBody = body.value.document.children.map((node) => {
    if (isBlock(node)) {
      node.blockData = body.blocks.find((item) => item.id === node.item)
    }

    return node
  })
</script>

<div class="blog-body">
  {#each formattedBody as node}
    {#if node.blockData}
      {#if node.blockData.__typename === 'VideoRecord'}
        <BlogVideo url={node.blockData.url} />
      {:else if node.blockData.__typename === 'ImageRecord'}
        <BlogImage
          image={node.blockData.image}
          caption={node.blockData.caption}
          imagePosition={node.blockData.imagePosition}
        />
      {/if}
    {:else}
      {@html renderStructuredText(node)}
    {/if}
  {/each}
</div>

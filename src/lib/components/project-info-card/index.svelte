<script lang="ts">
  import ShowcaseItem from '$lib/components/project-info-card/showcase-item/index.svelte'
  import { render as renderStructuredText } from 'datocms-structured-text-to-html-string'

  export let title
  export let description
  export let client
  export let url
  export let showcase
</script>

<div class="project-info-card">
  <div class="showcase">
    {#each showcase as { files }, i (i)}
      <ShowcaseItem {files} />
    {/each}
  </div>

  <h2>
    {#if url}
      <a href={url}>{title}</a>
    {:else}
      {title}
    {/if}
  </h2>

  {#if client}
    <h3>{client}</h3>
  {/if}

  {@html renderStructuredText(description)}
</div>

<!-- TODO implement theming -->

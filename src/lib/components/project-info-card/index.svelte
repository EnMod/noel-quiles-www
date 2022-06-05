<script context="module" lang="ts">
  import { ShowcaseItemProps } from '$lib/components/project-info-card/showcase-item/index.svelte'

  export interface ProjectInfoCardProps {
    title: string
    description: any // $TSFixMe
    client?: string
    url?: string
    showcase: Array<{
      files: ShowcaseItemProps['files']
    }>
  }
</script>

<script lang="ts">
  import ShowcaseItem from '$lib/components/project-info-card/showcase-item/index.svelte'
  import { render as renderStructuredText } from 'datocms-structured-text-to-html-string'

  export let title: ProjectInfoCardProps['title']
  export let description: ProjectInfoCardProps['description']
  export let client: ProjectInfoCardProps['client']
  export let url: ProjectInfoCardProps['url']
  export let showcase: ProjectInfoCardProps['showcase']
</script>

<!-- HTML -->
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

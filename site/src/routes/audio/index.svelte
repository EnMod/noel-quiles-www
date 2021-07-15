<script context="module">
  import query from './query'
  import gqlr from '$lib/utils/gql-request'

  export async function load() {
    const { allAudios } = await gqlr(query)
    return { props: { allAudios } }
  }
</script>

<script>
  import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

  export let allAudios
</script>

<div class="audio">
  <h1>(Sick animation to create the title)</h1>
  <p>And heeeere they are:</p>

  {#each allAudios as audio (audio.title)}
    <ProjectInfoCard {...audio} />
  {/each}
</div>

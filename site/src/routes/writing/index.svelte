<script context="module">
  import query from './query'
  import gqlr from '$lib/utils/gql-request'

  export async function load() {
    const { allWritings } = await gqlr(query)
    return { props: { allWritings } }
  }
</script>

<script>
  import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

  export let allWritings
</script>

<div class="writing">
  <h1>(Sick animation to create the title)</h1>
  <p>And heeeere they are:</p>
  {#each allWritings as writing (writing.title)}
    <ProjectInfoCard {...writing} />
  {/each}
</div>

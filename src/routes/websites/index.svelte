<script context="module">
  import query from './query'
  import gqlr from '$lib/utils/gql-request'

  export async function load() {
    const { allWebsites } = await gqlr(query)
    return { props: { allWebsites } }
  }
</script>

<script>
  import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

  export let allWebsites
</script>

<div class="websites">
  <h1>(Sick animation to create the title)</h1>
  <p>And heeeere they are:</p>
  {#each allWebsites as website (website.title)}
    <ProjectInfoCard {...website} />
  {/each}
</div>

<script lang="ts" context="module">
  import query from './query'
  import { mainGqlr } from '$lib/utils/gql-request'

  export async function load() {
    const { writings } = await mainGqlr(query)
    return { props: { writings } }
  }
</script>

<script lang="ts">
  import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

  export let writings
</script>

<h1>(Sick animation to create the title)</h1>
<p>And heeeere they are:</p>
{#each writings as writing (writing.title)}
  <ProjectInfoCard {...writing} />
{/each}
<p>Let's test out some <a href="#0">links</a></p>

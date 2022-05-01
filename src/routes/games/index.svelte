<script lang="ts" context="module">
  import query from './query'
  import { mainGqlr } from '$lib/utils/gql-request'

  export async function load() {
    const { games } = await mainGqlr(query)
    return { props: { games } }
  }
</script>

<script lang="ts">
  import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

  export let games
</script>

<h1>(Sick animation to create the title)</h1>
<p>And heeeere they are:</p>
{#each games as game (game.title)}
  <ProjectInfoCard {...game} />
{/each}

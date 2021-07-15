<script context="module">
  import query from './query'
  import gqlr from '$lib/utils/gql-request'

  export async function load() {
    const { allGames } = await gqlr(query)
    return { props: { allGames } }
  }
</script>

<script>
  import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

  export let allGames
</script>

<div class="games">
  <h1>(Sick animation to create the title)</h1>
  <p>And heeeere they are:</p>
  {#each allGames as game (game.title)}
    <ProjectInfoCard {...game} />
  {/each}
</div>

<script>
  // TODO Convert this prop to a getStaticProps-style data-fetch
  // export let allGames
  import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'
  import { genWorks } from '$lib/placeholder/data'

  const allGames = genWorks(5)
</script>

<div class="games">
  <h1>(Sick animation to create the title)</h1>
  <p>And heeeere they are:</p>
  {#each allGames as game (game.title)}
    <ProjectInfoCard {...game} />
  {/each}
</div>

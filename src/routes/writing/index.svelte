<script>
  // TODO Convert this prop to a getStaticProps-style data-fetch
  // export let allWritings
  import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'
  import { genWorks } from '$lib/placeholder/data'

  const allWritings = genWorks(3)
</script>

<div class="writing">
  <h1>(Sick animation to create the title)</h1>
  <p>And heeeere they are:</p>
  {#each allWritings as writing (writing.title)}
    <ProjectInfoCard {...writing} />
  {/each}
</div>

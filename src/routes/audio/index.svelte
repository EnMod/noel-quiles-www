<script>
  // TODO Convert this prop to a getStaticProps-style data-fetch
  export let allAudios
  import ProjectInfoCard from '$lib/components/project-info-card'
</script>

<div class="audio">
  <h1>(Sick animation to create the title)</h1>
  <p>And heeeere they are:</p>
  {#each allAudios as audio (audio.title)}
    <ProjectInfoCard {...audio} />
  {/each}
</div>

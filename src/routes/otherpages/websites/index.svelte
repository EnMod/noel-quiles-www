<script>
  // TODO Convert this prop to a getStaticProps-style data-fetch
  export let allWebsites
  import ProjectInfoCard from '$lib/components/project-info-card'
</script>

<div class="websites">
  <h1>(Sick animation to create the title)</h1>
  <p>And heeeere they are:</p>
  {#each allWebsites as website (website.title)}
    <ProjectInfoCard {...website} />
  {/each}
</div>

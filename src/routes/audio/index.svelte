<script lang="ts" context="module">
  import query from './query'
  import { mainGqlr } from '$lib/utils/gql-request'

  export async function load() {
    const { audios } = await mainGqlr(query)
    return { props: { audios } }
  }
</script>

<script lang="ts">
  import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

  export let audios
</script>

<div class="audio">
  <h1>(Sick animation to create the title)</h1>
  <p>And heeeere they are:</p>
  {#each audios as audio (audio.title)}
    <ProjectInfoCard {...audio} />
  {/each}
</div>

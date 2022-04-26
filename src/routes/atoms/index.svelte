<script lang="ts" context="module">
  // import query from './query'
  // import { mainGqlr } from '$lib/utils/gql-request'

  export async function load() {
    // const { content } = await mainGqlr(query)
    return { props: { content: '' } }
  }
</script>

<script lang="ts">
  export let content
</script>

<div class="page">
  <h1>(Sick animation to create the title)</h1>
  <p>Atoms: {content}</p>
</div>

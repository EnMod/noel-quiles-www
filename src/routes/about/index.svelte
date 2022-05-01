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

<h1>(Sick animation to create the title)</h1>
<p>About: {content}</p>
<p>Let's test out some <a href="#0">links</a></p>

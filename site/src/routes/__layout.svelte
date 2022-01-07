<script context="module">
  // /**
  //  * @type {import('@sveltejs/kit').Load}
  //  */
  export async function load({ url }) {
    return { props: { isHome: url.pathname === '/' } }
  }
</script>

<script>
  import Nav from '$lib/components/nav.svelte'

  export let isHome
</script>

<!-- Make exception for homepage  -->
{#if isHome}
  <main><slot /></main>
{:else}
  <Nav />
  <input type="text" placeholder="test input to test layout persistence!" />
  <main><slot /></main>
  <footer>Footer?</footer>
{/if}

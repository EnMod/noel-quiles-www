<script context="module">
  // /**
  //  * @type {import('@sveltejs/kit').Load}
  //  */
  export async function load({ page }) {
    return { props: { isHome: page.path === '/' } }
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

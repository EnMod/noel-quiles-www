<script lang="ts" context="module">
  // /**
  //  * @type {import('@sveltejs/kit').Load}
  //  */
  export async function load({ url }) {
    let slug = '/'

    if (url.pathname !== '/') {
      slug = url.pathname.split('/')[1]
    }
    return {
      props: {
        isHome: url.pathname === '/',
        slug
      }
    }
  }
</script>

<script lang="ts">
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'

  export let isHome
  export let slug
</script>

<!-- Make exception for homepage  -->
{#if isHome}
  <main><slot /></main>
{:else}
  <Header />
  <!-- TODO Change body class instead? Refresh memory on theme toggling at the <body> level 😅 -->
  <main class={slug}>
    <slot />
  </main>
  <Footer />
{/if}

<style lang="postcss">
  main {
    border-color: var(--qi-9);
    color: var(--qi-9);
    background-color: var(--qi-1);

    &.websites {
      border-color: var(--water-9);
      color: var(--water-9);
      background-color: var(--water-2);
    }

    &.writing {
      border-color: var(--earth-9);
      color: var(--earth-9);
      background-color: var(--earth-2);
    }

    &.audio {
      border-color: var(--wind-9);
      color: var(--wind-9);
      background-color: var(--wind-2);
    }

    &.games {
      border-color: var(--fire-9);
      color: var(--fire-9);
      background-color: var(--fire-2);
    }
  }
</style>

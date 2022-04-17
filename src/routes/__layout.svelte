<script lang="ts" context="module">
  // /**
  //  * @type {import('@sveltejs/kit').Load}
  //  */
  export async function load({ url }) {
    let isHome = url.pathname === '/'
    let slug = isHome ? '/' : url.pathname.split('/')[1]

    // TODO Fetch this
    let navLinks = [
      { slug: '', label: 'Home' },
      { slug: 'websites', label: 'Websites' },
      { slug: 'writing', label: 'Writing' },
      { slug: 'audio', label: 'Audio' },
      { slug: 'games', label: 'Games' },
      { slug: 'about', label: 'Games' },
      { slug: 'contact', label: 'Games' },
      { slug: 'atoms', label: 'Games' },
      { slug: 'links', label: 'Games' }
    ]

    return {
      props: {
        isHome,
        slug,
        navLinks
      }
    }
  }
</script>

<script lang="ts">
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'

  export let isHome: boolean
  export let slug: string
  export let navLinks
</script>

<!-- Make exception for homepage  -->
{#if isHome}
  <main><slot /></main>
{:else}
  <!-- TODO Get the color mode (light/dark) from theme context -->
  <div class="body-wrap light {slug}">
    <Header {navLinks} />
    <!-- TODO Change body class instead? Refresh memory on theme toggling at the <body> level 😅 -->
    <main>
      <slot />
    </main>
    <Footer />
  </div>
{/if}

<style lang="postcss">
  .body-wrap {
    transition: 0.25s ease;
    transition-property: color, border-color, background-color;
    border-color: var(--qi-9);
    color: var(--qi-9);
    background-color: var(--qi-1);

    &.light {
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

    &.dark {
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
  }
</style>

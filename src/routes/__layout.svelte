<script lang="ts" context="module">
  import { theme } from '$lib/stores'
  import { get } from 'svelte/store'

  // /**
  //  * @type {import('@sveltejs/kit').Load}
  //  */
  export async function load({ url }) {
    const slug = url.pathname.split('/')[1]
    // TODO Set mode based on preferences
    theme.set({ mode: get(theme).mode, scheme: slug })

    // TODO Fetch this
    const navLinks = [
      { slug: '', label: 'Home' },
      { slug: 'websites', label: 'Websites' },
      { slug: 'writing', label: 'Writing' },
      { slug: 'audio', label: 'Audio' },
      { slug: 'games', label: 'Games' },
      { slug: 'about', label: 'About' },
      { slug: 'contact', label: 'Contact' },
      { slug: 'atoms', label: 'Atoms' },
      { slug: 'links', label: 'Links' }
    ]

    return {
      props: {
        navLinks
      }
    }
  }
</script>

<script lang="ts">
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'

  export let navLinks: Array<{
    slug: string
    label: string
  }>
</script>

<div class="body-wrap {$theme.mode} {$theme.scheme}">
  <Header {navLinks} />
  <main id="main">
    <slot />
  </main>
  <Footer />
</div>

<style lang="postcss">
  .body-wrap {
    transition: 0.25s ease;
    transition-property: color, border-color, background-color;

    border-color: var(--text-color);
    color: var(--text-color);
    background-color: var(--background-color);

    & .secondary {
      color: var(--text-secondary-color);
    }

    /* ? TODO Re-assess if this is a bit much */
    & :global(a) {
      transition: color 0.25s ease;
      color: var(--link);

      &:hover {
        color: var(--link-hover);
      }
    }
  }
</style>

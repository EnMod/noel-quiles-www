<script lang="ts" context="module">
  import { get } from 'svelte/store'
  import { theme } from '$lib/stores'
  import { mainGqlr } from '$lib/utils/gql-request'
  import navQuery from './nav-query'

  // /**
  //  * @type {import('@sveltejs/kit').Load}
  //  */
  export async function load({ url }) {
    const slug = url.pathname.split('/')[1]
    // TODO Set mode based on preferences
    theme.set({ mode: get(theme).mode, scheme: slug })

    // Fetch nav links
    const { molecules } = await mainGqlr(navQuery)

    const navLinks = molecules.map((molecule) => {
      return { slug: molecule.slug, label: molecule.title }
    })

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

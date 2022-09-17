<script lang="ts">
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'
  import { theme } from '$lib/stores'

  interface MainLayoutProps {
    navLinks: Array<{
      slug: string
      label: string
    }>
  }

  export let data
  let { navLinks }: MainLayoutProps = data
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

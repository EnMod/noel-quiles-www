<script lang="ts">
  import { theme } from '$lib/stores'
  import AppearanceToggle from '$lib/components/appearance-toggle/index.svelte'
</script>

<div class="blog-page {$theme.appearance} {$theme.scheme}">
  <div>Header?</div>
  <div>Nav! <AppearanceToggle /></div>
  <main id="main">
    <slot />
  </main>
  <div>Footer?</div>
</div>

<style lang="postcss">
  .blog-page {
    transition: 0.25s ease;
    transition-property: color, border-color, background-color;
    background-color: var(--background-color);
    color: var(--text-color);

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

<script lang="ts">
  import { theme } from '$lib/stores'
  import AppearanceToggle from '$lib/components/appearance-toggle/index.svelte'
  import SchemeSelector from '$lib/components/scheme-selector.svelte'
  import VariantMusingsLogo from '$lib/img/navigation/variant-musings.svelte'
</script>

<div class="blog-page {$theme.appearance} {$theme.scheme}">
  <div class="nav-wrap">
    <nav class="g-container">
        <VariantMusingsLogo />
      </a>

      <menu>
        <li>
          <SchemeSelector />
        </li>
        <li>
          <AppearanceToggle />
        </li>
      </menu>
    </nav>
  </div>

  <div id="main" class="g-container">
    <slot />
  </div>
  <footer>Footer?</footer>
</div>

<style lang="postcss">
  .blog-page {
    transition: 0.25s ease;
    transition-property: color, border-color, background-color;
    background-color: var(--background-color);
    color: var(--text-color);
    min-height: 100vh;

    /* ? TODO Re-assess if this is a bit much */
    & :global(a) {
      transition: color 0.25s ease;
      color: var(--link);

      &:hover {
        color: var(--link-hover);
      }
    }
  }

  .nav-wrap {
    width: 100%;
    border-bottom: 1px solid var(--separator);
    transition: 0.25s ease;
    transition-property: border-color;
  }

  nav {
    --padding-y: var(--sz-03);

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: sticky;
    top: 0px;
    align-items: center;
    padding-top: var(--padding-y);
    padding-bottom: var(--padding-y);
  }

  menu {
    justify-self: end;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: var(--sz-03);

    & li {
      display: flex;
    }
  }
</style>

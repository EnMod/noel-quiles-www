<script lang="ts" context="module">
  import { theme } from '$lib/stores/theme'

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
  import { get } from 'svelte/store'

  export let slug: string
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
    --text-color: var(--yin);
    --background-color: var(--qi-1);
    --link: var(--qi-5);
    --text-secondary-color: var(--qi-8);

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

    &.light {
      --text-color: var(--yin);
      --background-color: var(--qi-1);
      --link: var(--qi-5);
      --link-hover: var(--qi-4);
      --text-secondary-color: var(--qi-8);

      &.websites {
        --text-color: var(--water-9);
        --background-color: var(--water-1);
        --link: var(--water-5);
        --link-hover: var(--water-4);
        --text-secondary-color: var(--water-8);
      }

      &.writing {
        --text-color: var(--earth-9);
        --background-color: var(--earth-1);
        --link: var(--earth-8);
        --link-hover: var(--earth-7);
        --text-secondary-color: var(--earth-8);
      }

      &.audio {
        --text-color: var(--wind-9);
        --background-color: var(--wind-1);
        --link: var(--wind-8);
        --link-hover: var(--wind-7);
        --text-secondary-color: var(--wind-7);
      }

      &.games {
        --text-color: var(--fire-9);
        --background-color: var(--fire-1);
        --link: var(--fire-6);
        --link-hover: var(--fire-5);
        --text-secondary-color: var(--fire-8);
      }
    }

    &.dark {
      --text-color: var(--yang);
      --background-color: var(--qi-9);
      --link: var(--qi-3);
      --link-hover: var(--qi-4);
      --text-secondary-color: var(--qi-3);

      &.websites {
        --text-color: var(--water-1);
        --background-color: var(--water-9);
        --link: var(--water-3);
        --link-hover: var(--water-4);
        --text-secondary-color: var(--water-3);
      }

      &.writing {
        --text-color: var(--earth-1);
        --background-color: var(--earth-9);
        --link: var(--earth-6);
        --link-hover: var(--earth-7);
        --text-secondary-color: var(--earth-4);
      }

      &.audio {
        --text-color: var(--wind-1);
        --background-color: var(--wind-9);
        --link: var(--wind-4);
        --link-hover: var(--wind-5);
        --text-secondary-color: var(--wind-3);
      }

      &.games {
        --text-color: var(--fire-1);
        --background-color: var(--fire-9);
        --link: var(--fire-4);
        --link-hover: var(--fire-5);
        --text-secondary-color: var(--fire-3);
      }
    }
  }
</style>

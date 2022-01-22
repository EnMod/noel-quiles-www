<script lang="ts">
  import ThemeToggle from '$lib/components/theme-toggle/index.svelte'

  // TODO: Create a proper nav
  // export let links
  const links = [
    { slug: '', label: 'Home' },
    { slug: 'websites', label: 'Websites' },
    { slug: 'writing', label: 'Writing' },
    { slug: 'audio', label: 'Audio' },
    { slug: 'games', label: 'Games' }
  ]
</script>

<nav>
  <ul>
    {#each links as { slug, label } (label)}
      <li>
        <a href="/{slug}">{label}</a>
      </li>
    {/each}
    <ThemeToggle />
  </ul>
</nav>

<style>
  nav {
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: space-between;
    padding: 4px 16px;
    margin: 0;
  }

  li {
    display: flex;
    padding: 6px 8px;
  }

  a {
    color: #067df7;
    text-decoration: none;
    font-size: 13px;
  }
</style>

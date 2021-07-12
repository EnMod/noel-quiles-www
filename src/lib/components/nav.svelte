<script>
  // TODO: Create a proper nav
  // export let links
  const links = [
    { slug: '', label: 'Home' },
    { slug: 'websites', label: 'Websites' },
    { slug: 'games', label: 'Games' },
    { slug: 'audio', label: 'Audio' },
    { slug: 'writing', label: 'Writing' }
  ]
</script>

<nav>
  <ul>
    {#each links as { slug, label } (label)}
      <li>
        <a href="/{slug}">{label}</a>
      </li>
    {/each}
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

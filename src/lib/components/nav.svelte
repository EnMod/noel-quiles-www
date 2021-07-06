<script>
  // TODO: Create a proper nav
  // export let links
  const links = [
    { href: '/', label: 'Home' },
    { href: '/websites', label: 'Websites' },
    { href: '/games', label: 'Games' },
    { href: '/audio', label: 'Audio' },
    { href: '/writing', label: 'Writing' }
  ]
</script>

<nav>
  <ul>
    {#each links as href, label (label)}
      <li>
        <a {href}>{label}</a>
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

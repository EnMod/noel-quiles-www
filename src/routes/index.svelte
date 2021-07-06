<script>
  import PageIconLink from '$lib/components/page-icon-link.svelte'
</script>

<div class="home">
  <h1 class="headline">I&apos;m Noel Quiles, and</h1>
  <div class="manifesto g-text-hero">I connect to create.</div>
  <div class="links">
    {#each pageLinks as link (link.title)}
      <PageIconLink {...link} />
    {/each}
  </div>
</div>

<style lang="postcss">
  /* TODO Refactor to use Grid */
  .home {
    --gap: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100vw;
  }

  .headline {
    margin-top: 0;
  }

  .manifesto {
    margin-bottom: calc(var(--gap) * 2);
  }

  .links {
    width: calc(480px + var(--gap) * 3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  :global(.page-icon-link) {
    margin-bottom: var(--gap);
    margin-right: var(--gap);

    &:nth-child(4n),
    &:last-child {
      margin-right: 0;
    }

    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  }
</style>

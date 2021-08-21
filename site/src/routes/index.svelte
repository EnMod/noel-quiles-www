<script context="module">
  import query from './query'
  import gqlr from '$lib/utils/gql-request'

  export async function load() {
    const { molecules } = await gqlr(query)
    return { props: { molecules } }
  }
</script>

<script>
  import Molecule from '$lib/components/molecule/index.svelte'

  export let molecules
</script>

<div class="home">
  <h1 class="headline">I&apos;m Noel Quiles, and</h1>
  <div class="manifesto g-text-hero">I connect to create.</div>
  <div class="molecules">
    {#each molecules as molecule (molecule.title)}
      <Molecule theme={molecule.slug.current} {...molecule} />
    {/each}
  </div>
</div>

<style lang="postcss">
  .home {
    --gap: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
  }

  .headline {
    margin-top: 0;
  }

  .manifesto {
    margin-bottom: calc(var(--gap) * 2);
  }

  .molecules {
    display: grid;
    gap: var(--gap);
    grid-template-columns: repeat(4, 1fr);
  }

  /* Skip a cell in the second row */
  :global(.page-icon-link):nth-child(5) {
    grid-column: 2;
  }
</style>

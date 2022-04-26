<script lang="ts" context="module">
  import query from './query'
  import { mainGqlr } from '$lib/utils/gql-request'

  export async function load() {
    const { molecules } = await mainGqlr(query)
    return { props: { molecules } }
  }
</script>

<script lang="ts">
  import Molecule, { MoleculeProps } from '$lib/components/molecule/index.svelte'

  export let molecules: Array<MoleculeProps>
</script>

<div class="home">
  <h1 class="headline">I&apos;m Noel Quiles, and</h1>
  <div class="manifesto g-text-hero">I connect to create.</div>
  <div class="molecules">
    {#each molecules as molecule (molecule.title)}
      <!-- TODO Change formation to homeOpen when testing full animation! -->
      <!-- TODO Perhaps leave alone for now -->
      <Molecule
        formation="homeClosed"
        title={molecule.title}
        description={molecule.description}
        slug={molecule.slug}
        image={molecule.image}
        atoms={molecule.atoms}
      />
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
</style>

<script lang="ts">
  import { theme } from '$lib/stores'
  import Molecule from '$lib/components/molecule/index.svelte'
  import type { MoleculeProps } from '$lib/components/molecule/index.svelte'
  import ModeToggle from '$lib/components/appearance-toggle/index.svelte'

  interface HomepageProps {
    molecules: Array<MoleculeProps>
  }

  export let data
  let { molecules }: HomepageProps = data
</script>

<div class="home {$theme.appearance}">
  <p>
    Testing mode toggle:
    <ModeToggle />
    {$theme.appearance}
  </p>
  <h1 class="headline">I&apos;m Noel Quiles, and</h1>
  <div class="manifesto g-text-hero">I connect to create.</div>
  <div class="molecules">
    {#each molecules as molecule (molecule.title)}
      <!-- TODO Change formation to homeOpen when testing full animation! -->
      <!-- TODO Perhaps leave alone for now -->
      <Molecule
        formation="closed"
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

    transition: 0.25s ease;
    transition-property: color, border-color, background-color;

    background-color: var(--background-color);
    color: var(--text-color);
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

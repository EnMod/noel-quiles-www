<script lang="ts">
  import { theme } from '$lib/stores'
  // import Molecule from '$lib/components/molecule/index.svelte'
  // import type { MoleculeProps } from '$lib/components/molecule/index.svelte'
  // import AppearanceToggle from '$lib/components/appearance-toggle/index.svelte'

  // interface HomepageProps {
  //   molecules: Array<MoleculeProps>
  // }

  // export let data
  // let { molecules }: HomepageProps = data
</script>

<div class="home {$theme.appearance}">
  <!-- <p>
    Testing appearance toggle:
    <AppearanceToggle />
    {$theme.appearance}
  </p> -->
  <h1 class="headline">
    <span>I&apos;m Noel Quiles, and</span>
    <span class="manifesto g-text-hero">I connect to create.</span>
  </h1>

  <div class="details">
    <p>
      This site is undergoing a major overhaul, and I&apos;m <em>doing it live</em> starting with
      <a href="/blog">my blog</a>!
    </p>
    <p>
      Follow along in <a href="#TODO-actually-add-the-blog-post">my first new blog post</a>, updated
      as I go. Or check out
      <a href="#TODO-actually-make-the-PR">the PR on GitHub</a>!
    </p>
  </div>

  <!-- TODO Come back to molecules as the pages return -->
  <!-- <div class="molecules">
    {#each molecules as molecule (molecule.title)}
      <!-- TODO Change formation to homeOpen when testing full animation! -->
  <!-- TODO Perhaps leave alone for now -->
  <!-- <Molecule
        formation="closed"
        title={molecule.title}
        description={molecule.description}
        slug={molecule.slug}
        image={molecule.image}
        atoms={molecule.atoms}
      /> -->
  <!-- {/each} -->
  <!-- </div>  -->
</div>

<style lang="postcss">
  .home {
    --gap: var(--sz-m-04);

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

  .details {
    margin-top: var(--sz-gap-m);
  }

  p {
    margin-top: 0;
    margin-bottom: var(--sz-gap-xs);
  }

  .headline {
    margin-top: 0;
    margin-bottom: 0;
    display: grid;
    gap: calc(var(--gap) / 2);

    & span {
      display: block;
    }
  }

  /* .manifesto {
    margin-bottom: calc(var(--gap) * 2);
  } */

  .molecules {
    display: grid;
    gap: var(--gap);
    grid-template-columns: repeat(4, 1fr);
  }
</style>

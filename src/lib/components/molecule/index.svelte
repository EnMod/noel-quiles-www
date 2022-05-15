<script context="module" lang="ts">
  import { MoleculeLinkProps } from '../molecule-link.svelte'

  // TODO Look into using a Union instead
  export interface MoleculeProps extends MoleculeLinkProps {
    formation: string
    atoms: Array<{
      title: string
    }>
    description: string
  }
</script>

<script lang="ts">
  // import { onMount } from 'svelte'
  import { theme } from '$lib/stores'
  import { getRandomIntInc } from '$lib/utils/helpers'
  import MoleculeLink from '../molecule-link.svelte'

  // Locally-set props
  export let formation: MoleculeProps['formation']

  // Dato-set props
  export let atoms: MoleculeProps['atoms']
  export let description: MoleculeProps['description']
  export let title: MoleculeProps['title']
  export let image: MoleculeProps['image']
  export let slug: MoleculeProps['slug']

  // TODO Will be handy later
  function randomizePosition() {
    const top = getRandomIntInc(0, 100)
    const left = getRandomIntInc(0, 100)
    return { top: `${top}%`, left: `${left}%` }
  }

  function closeMolecule() {
    // Determine midpoint of all atoms
    // Pull in all atoms to midpoint
    // Spawn molecule icon at midpoint
    // Move molecule to default position
  }

  // TODO Get on-load transitions set up for atoms
  // let ready = false
  // onMount(() => (ready = true))
</script>

<div class="molecule {$theme.mode} {slug} {formation || ''}">
  {#if formation === 'open'}
    <div class="header">
      <h1 class="title">{title}</h1>
      {#if description}
        <span class="description">
          {description}
        </span>
      {/if}
    </div>
  {/if}

  {#if formation === 'closed'}
    <MoleculeLink {image} {slug} {title} />
  {/if}

  {#if formation === 'open'}
    <div class="atoms">
      {#each atoms as atom (atom.title)}
        <div class="atom">
          <span>{atom.title}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .molecule {
    --transition-timing: 0.3s;

    &.open {
    }

    &.closed {
    }
  }

  .header {
    display: flex;
    flex-direction: column-reverse;
  }

  .atom {
    border-radius: 50%;
    border: 4px solid var(--text-color);
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--heading-font);
    font-weight: bold;
    text-transform: uppercase;

    color: var(--text-color);
    background-color: var(--background-color);
    border-color: var(--text-color);
  }
</style>

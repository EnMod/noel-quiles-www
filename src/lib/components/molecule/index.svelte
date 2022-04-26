<script context="module" lang="ts">
  export interface MoleculeProps {
    formation: string
    image: {
      url: string
      alt: string
    }
    atoms: Array<{
      title: string
    }>
    title: string
    description: string
    slug: string
  }
</script>

<script lang="ts">
  // import { onMount } from 'svelte'
  import { getRandomIntInc } from '$lib/utils/helpers'
  import MoleculeLink from '../molecule-link.svelte'

  // Local props
  export let formation: MoleculeProps['formation']

  // Dato-level props
  export let image: MoleculeProps['image']
  export let atoms: MoleculeProps['atoms']
  export let title: MoleculeProps['title']
  export let description: MoleculeProps['description']
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

<div class="molecule {formation || ''}">
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
        <div class="atom {slug}">
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
    border: 4px solid var(--qi-9);
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--heading-font);
    font-weight: bold;
    text-transform: uppercase;

    color: var(--qi-9);
    background-color: var(--qi-1);

    &.websites {
      border-color: var(--water-9);
      color: var(--water-9);
      background-color: var(--water-2);
    }

    &.writing {
      border-color: var(--earth-9);
      color: var(--earth-9);
      background-color: var(--earth-2);
    }

    &.audio {
      border-color: var(--wind-9);
      color: var(--wind-9);
      background-color: var(--wind-2);
    }

    &.games {
      border-color: var(--fire-9);
      color: var(--fire-9);
      background-color: var(--fire-2);
    }
  }
</style>

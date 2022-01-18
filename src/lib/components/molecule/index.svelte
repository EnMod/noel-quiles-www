<script lang="ts">
  // import { onMount } from 'svelte'
  import { getRandomIntInc } from '$lib/utils/helpers'
  import MoleculeLink from '../molecule-link.svelte'
  import { Atom, Icon } from './types'

  // Local props
  export let formation: string

  // Dato-level props
  export let image: Icon
  export let atoms: Atom[]
  export let title: string
  export let description: string
  export let theme: string

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
        <h5 class="description">
          {description} <span aria-hidden="true">evinced through</span>
        </h5>
      {/if}
    </div>
  {/if}

  {#if formation === 'homeClosed'}
    <MoleculeLink {image} {theme} {title} />
  {/if}

  {#if formation === 'open' || formation === 'homeOpen'}
    <div class="atoms">
      {#each atoms as atom (atom.title)}
        <div class="atom {theme}">
          <span>{atom.title}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .molecule {
    --transition-timing: 0.3s;

    &.homeOpen {
    }

    &.homeClosed {
    }

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

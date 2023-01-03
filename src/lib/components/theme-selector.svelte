<script lang="ts">
  import { get } from 'svelte/store'
  import { theme } from '$lib/stores'
  let selectionsOpen = false
  const schemeOptions = ['websites', 'audio', 'games', 'writing', 'neutral']
  let selectedScheme = 'writing'

  function selectScheme(option) {
    theme.set({ appearance: get(theme).appearance, scheme: option })
    selectedScheme = option
    selectionsOpen = false
  }
</script>

<div>
  <button
    on:click={() => {
      selectionsOpen = !selectionsOpen
    }}
  >
    <img
      class="icon"
      alt="{selectedScheme} scheme icon"
      src="/img/theme-selector/{selectedScheme}.svg"
    />
  </button>

  {#if selectionsOpen}
    {#each schemeOptions as option}
      <button
        on:click={() => {
          selectScheme(option)
        }}
      >
        <img class="icon" alt="{option} scheme icon" src="/img/theme-selector/{option}.svg" />
      </button>
    {/each}
  {/if}
</div>

<style lang="postcss">
  button {
    border: 0;
    background: none;
    cursor: pointer;
  }

  .icon {
    min-width: var(--sz-gap-m);
  }
</style>

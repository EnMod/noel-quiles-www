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

<div class="scheme-selector">
  <button
    on:click={() => {
      selectionsOpen = !selectionsOpen
    }}
  >
    <img
      alt="{selectedScheme} scheme icon"
      src="/img/scheme-selector/{selectedScheme}.svg"
    />
  </button>
  {#if selectionsOpen}
    {#each schemeOptions as option}
      <button
        on:click={() => {
          selectScheme(option)
        }}
      >
        <img alt="{option} scheme icon" src="/img/scheme-selector/{option}.svg" />
      </button>
    {/each}
  {/if}
</div>

<style lang="postcss">
  button {
    border: 0;
    background: none;
    cursor: pointer;
    padding: 0;
  }

  .scheme-selector {
    display: flex;
    gap: 0;
  }
</style>

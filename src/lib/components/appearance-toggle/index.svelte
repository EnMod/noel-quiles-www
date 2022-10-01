<script lang="ts">
  import { theme } from '$lib/stores'
  let buttonImg = $theme.appearance === 'light' ? 'dark' : 'light'

  function toggleAppearance() {
    if ($theme.appearance === 'light') {
      $theme.appearance = 'dark'
      buttonImg = 'light'
    } else {
      $theme.appearance = 'light'
      buttonImg = 'dark'
    }
  }
</script>

<button on:click={toggleAppearance}>
  <img class="icon" alt="{buttonImg} mode icon" src="./img/appearance-toggle/{buttonImg}.svg" />
</button>

<style lang="postcss">
  button {
    border: 0;
    background: none;
    cursor: pointer;
  }

  .icon {
    min-width: 32px;
  }
</style>

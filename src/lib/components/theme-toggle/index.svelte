<script lang="ts">
  import { theme } from '$lib/stores/theme'
  let buttonImg = 'dark'

  function toggleTheme() {
    if ($theme.mode === 'light') {
      $theme.mode = 'dark'
      buttonImg = 'light'
    } else {
      $theme.mode = 'light'
      buttonImg = 'dark'
    }
  }
</script>

<button on:click={toggleTheme}>
  <img class="icon" alt="{buttonImg} mode icon" src="./img/theme-toggle/{buttonImg}.svg" />
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

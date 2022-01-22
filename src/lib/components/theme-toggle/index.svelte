<script lang="ts">
  let mode = 'light'
  let buttonImg = 'dark'

  function toggleTheme() {
    if (mode === 'light') {
      mode = 'dark'
      buttonImg = 'light'
    } else {
      mode = 'light'
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

<script>
  import '../styles/global.css'
</script>

<main id="main"><slot /></main>

<style lang="postcss">
  main {
    background-color: var(--background-color);
    min-height: 100vh;
  }
</style>

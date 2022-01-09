<script lang="ts">
  import Atom from './atom.svelte'

  export let atoms
  export let theme
</script>

<div class="molecule">
  {#each atoms as atom}
    <Atom {theme} {...atom} />
  {/each}
</div>

<style>
  /* your styles go here */
</style>

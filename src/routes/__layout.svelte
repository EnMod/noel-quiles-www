<script>
  import { page } from '$app/stores'

  import Nav from '$lib/components/nav.svelte'
</script>

<!-- Make exception for homepage  -->
{#if page.path === '/'}
  <slot />
{:else}
  <div>Header?</div>
  <Nav />
  <input type="text" placeholder="test input to test layout persistence!" />
  <slot />
  <div>Footer?</div>
{/if}

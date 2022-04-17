<script lang="ts">
  import Nav from '$lib/components/nav.svelte'

  export let navLinks
</script>

<header>
  <Nav links={navLinks} />
</header>

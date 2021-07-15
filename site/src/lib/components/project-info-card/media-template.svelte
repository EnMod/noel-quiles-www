<script>
  export let type
  export let files
</script>

{#each files as { url, mimeType }, i (i)}
  <source src={url} type={mimeType} />
{/each}

<!-- Fallback for rich media embeds -->
{#if type !== 'image'}
  <p>
    Unfortunately your browser doesn&apos;t support this {type} embed. Here&apos;s a{' '}
    <a href={files[0].url} title="Direct {type} link">
      link to the {type}
    </a>{' '}
    instead!
  </p>
{/if}

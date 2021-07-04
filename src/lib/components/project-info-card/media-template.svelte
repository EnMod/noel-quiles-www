<script>
  export let type
  export let files
</script>

{#each files as url, mimeType (url)}
  <source src={url} type={mimeType} />
{/each}
<p>
  Unfortunately your browser doesn&apos;t support this {type} embed. Here&apos;s a{' '}
  <a href={files[0].url} title="Direct {type} link">
    link to the {type}
  </a>{' '}
  instead!
</p>

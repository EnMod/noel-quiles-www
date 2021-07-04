<script>
  import MediaTemplate from '$c/project-info-card/media-template.svelte'
  export let files

  const mimeCategory = files[0].mimeType.split('/')[0]
</script>

{#if mimeCategory === 'audio'}
  <!-- TODO Maybe apply some video-specific CSS here -->
  <audio controls>
    <!-- TODO prepare lyrics for any hosted audio -->
    <track kind="captions" />
    <MediaTemplate type="audio" {files} />
  </audio>
{:else if mimeCategory === 'video'}
  <!-- TODO Maybe apply some video-specific CSS here -->
  <video controls>
    <!-- TODO prepare captions for any hosted videos -->
    <track kind="captions" />
    <MediaTemplate type="video" {files} />
  </video>
{:else if mimeCategory === 'image'}
  <figure>
    {#each files as url, mimeType (url)}
      <!-- ? Might throw in srcSet here later idk -->

      <source src={url} type={mimeType} />
    {/each}
    <img src={files[0].url} alt={files[0].alt || 'Project image'} width="100" height="100" />
  </figure>
{/if}

<style>
  img {
    max-width: 100%;
  }
</style>

<script>
  export let image
  export let title

  const pageSlug = title.toLowerCase()
</script>

<div class="page-icon-link">
  <img src={image.url} alt={image.alt} />

  <a href="/{pageSlug}">
    <div class="title {pageSlug}">
      <span>{title}</span>
    </div>
  </a>
</div>

<style>
  .page-icon-link {
    --size: 120px;

    width: var(--size);
    height: var(--size);
    position: relative;
  }

  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    background: var(--qi-1);
    color: var(--qi-9);
    top: 0;
    transition: opacity 0.15s ease-in-out;
    width: var(--size);
    height: var(--size);
    z-index: 2;
  }

  .title:hover {
    opacity: 1;
  }

  .audio {
    color: var(--wind-9);
    background: var(--wind-1);
  }

  .websites {
    color: var(--water-9);
    background: var(--water-1);
  }

  .games {
    color: var(--fire-9);
    background: var(--fire-1);
  }

  .writing {
    color: var(--earth-9);
    background: var(--earth-1);
  }
</style>

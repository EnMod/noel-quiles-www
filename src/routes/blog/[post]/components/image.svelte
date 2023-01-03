<script lang="ts">
  interface BlogImageProps {
    image: {
      url: string
      alt?: string
    }
    imagePosition?: 'left' | 'right' | 'center'
    caption?: string
  }

  export let image: BlogImageProps['image']
  export let imagePosition: BlogImageProps['imagePosition'] = 'center'
  export let caption: BlogImageProps['caption'] = ''
</script>

<figure class="blog-image {imagePosition}">
  <img srcset={image.url} alt={image.alt} />

  {#if caption}
    <figcaption class="caption g-label">{caption}</figcaption>
  {/if}
</figure>

<style lang="postcss">
  .blog-image {
    margin: 0;
    display: grid;
    place-items: center;

    & img {
      max-width: 100%;
    }

    &.left {
      float: left;
      margin-right: var(--sz-gap-s);
    }

    &.right {
      float: right;
      margin-left: var(--sz-gap-s);
    }
  }

  .caption {
    padding-top: var(--sz-body-s);
    color: var(--qi-5);
  }
</style>

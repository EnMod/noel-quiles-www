<script lang="ts">
  interface BlogImageProps {
    image: {
      url: string
      alt?: string
    }
    floatPosition?: 'left' | 'right' | 'center'
    caption?: string
  }

  export let image: BlogImageProps['image']
  export let floatPosition: BlogImageProps['floatPosition'] = 'center'
  export let caption: BlogImageProps['caption'] = ''
</script>

<figure class="blog-image {floatPosition}">
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
      margin-right: 16px;
    }

    &.right {
      float: right;
      margin-left: 16px;
    }
  }

  .caption {
    padding-top: 8px;
    color: var(--qi-5);
  }
</style>

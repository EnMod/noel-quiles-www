<script context="module" lang="ts">
  import type { ImageProps } from '$lib/types/types'

  export interface MoleculeLinkProps {
    slug: string
    title: string
    image: ImageProps
  }
</script>

<script lang="ts">
  import { theme } from '$lib/stores'

  export let slug: MoleculeLinkProps['slug']
  export let title: MoleculeLinkProps['title']
  // TODO Refactor to general image props?
  export let image: MoleculeLinkProps['image']
</script>

<a class="link {$theme.appearance} {slug}" href={`/${slug}`} {title}>
  <img class="moleculeImage" src={image.url} alt={image.alt} />
  <span class="caption">{title}</span>
</a>

<style lang="postcss">
  .link {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: var(--transition-timing) ease;
    transition-property: transform;

    &:hover {
      transform: scale(1.1);

      & .caption {
        opacity: 1;
        transform: translateY(10px);
      }
    }
  }

  .caption {
    position: absolute;
    bottom: -10px;
    opacity: 0;

    transition: var(--transition-timing) ease;
    transition-property: transform, opacity;
    color: var(--link);
  }

  .moleculeImage {
    max-width: 128px;
  }
</style>

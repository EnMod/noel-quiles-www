<script lang="ts">
  import { Icon } from '$lib/components/molecule/types'

  export let theme: string
  export let title: string
  export let image: Icon
</script>

<a class="link" href={`/${theme}`} {title}>
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
  }

  .moleculeImage {
    max-width: 128px;
  }
</style>

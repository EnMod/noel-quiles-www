<script lang="ts">
  export let text: string
  export let url: string
</script>

<p class="eyebrow g-label">
  {#if url}
    <a href={url}>{text}</a>
  {:else}
    {text}
  {/if}
</p>

<style lang="postcss">
  .eyebrow {
    margin: 0;

    & :global(a) {
      text-decoration: none;
      transition: color 0.25s ease;

      &:hover {
        color: var(--link-hover);
      }
    }
  }
</style>

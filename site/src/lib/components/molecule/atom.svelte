<script>
  export let title
  export let theme
</script>

<div class="atom {theme}">
  <span>{title}</span>
</div>

<style lang="postcss">
  .atom {
    border-radius: 50%;
    border: 4px solid var(--qi-9);
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--heading-font);
    font-weight: bold;
    text-transform: uppercase;

    color: var(--qi-9);
    background-color: var(--qi-1);

    &.websites {
      border-color: var(--water-9);
      color: var(--water-9);
      background-color: var(--water-2);
    }

    &.writing {
      border-color: var(--earth-9);
      color: var(--earth-9);
      background-color: var(--earth-2);
    }

    &.audio {
      border-color: var(--wind-9);
      color: var(--wind-9);
      background-color: var(--wind-2);
    }

    &.games {
      border-color: var(--fire-9);
      color: var(--fire-9);
      background-color: var(--fire-2);
    }
  }
</style>

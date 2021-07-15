<script>
  export let label
  export let theme
</script>

<div class="atom {theme}" />

<style>
  .atom {
    border-radius: 50%;
    border: 5px solid;

    &.websites {
      border-color: var(--water-9);
    }

    &.writing {
      border-color: var(--earth-9);
    }

    &.audio {
      border-color: var(--wind-9);
    }

    &.games {
      border-color: var(--fire-9);
    }
  }
</style>

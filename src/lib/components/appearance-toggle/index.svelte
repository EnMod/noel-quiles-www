<script lang="ts">
  import { theme } from '$lib/stores'
  import { tweened } from 'svelte/motion'
  import LightIcon from '$lib/img/appearance-toggle/light.svelte'
  import DarkIcon from '$lib/img/appearance-toggle/dark.svelte'

  let iconAppearance = getOppositeAppearance()

  const rotationValue = tweened(0, {
    duration: 150
  })

  function toggleAppearance() {
    animateToAppearance(getOppositeAppearance())
  }

  function animateToAppearance(appearance) {
    rotationValue.set(-90).then(() => {
      $theme.appearance = appearance
      iconAppearance = getOppositeAppearance()
      rotationValue.set(0)
    })
  }

  function getOppositeAppearance() {
    return $theme.appearance === 'light' ? 'dark' : 'light'
  }

  const APPEARANCE_ICON_MAP = {
    light: LightIcon,
    dark: DarkIcon
  }
</script>

<button on:click={toggleAppearance}>
  <div class="icon" style="transform:rotateY({$rotationValue}deg)">
    <svelte:component this={APPEARANCE_ICON_MAP[iconAppearance]} />
  </div>
</button>

<style lang="postcss">
  button {
    border: 0;
    background: none;
    cursor: pointer;
    perspective: 1200px;
  }

  .icon {
    width: 32px;
    height: 32px;
    transform-style: preserve-3d;
  }
</style>

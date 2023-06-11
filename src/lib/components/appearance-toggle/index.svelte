<script lang="ts">
  import { theme } from '$lib/stores'

  let iconAppearance = $theme.appearance === 'light' ? 'dark' : 'light'
  let flipAnim = ''

  function toggleAppearance() {
    if ($theme.appearance === 'light') {
      setAnimClass('dark')
    } else {
      setAnimClass('light')
    }
  }

  function setAnimClass(appearance) {
    flipAnim = 'flip-it'
    setTimeout(() => {
      $theme.appearance = appearance
      iconAppearance = getOppositeAppearance(appearance)
    }, 150)
    setTimeout(() => {
      flipAnim = ''
    }, 300)
  }

  function getOppositeAppearance(appearance) {
    return appearance === 'light' ? 'dark' : 'light'
  }
</script>

<button on:click={toggleAppearance}>
  <img
    class="icon {flipAnim}"
    src="/img/appearance-toggle/{iconAppearance}.svg"
    alt="{iconAppearance} toggle icon"
  />
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

  .flip-it {
    animation-name: flip-it;
    animation-timing-function: linear;
    animation-duration: 300ms;
  }

  @keyframes flip-it {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(-90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
</style>

<script lang="ts">
	export let level: number
	export let text: string
	export let hash: string
</script>

<svelte:element this={`h${level}`} id={hash}>{text}</svelte:element>

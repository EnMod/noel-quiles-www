<script lang="ts">
	import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

	interface GamePageProps {
		games: any
	}

	export let data
	let { games }: GamePageProps = data
</script>

<h1>(Sick animation to create the title)</h1>
<p>And heeeere they are:</p>
{#each games as game (game.title)}
	<ProjectInfoCard {...game} />
{/each}

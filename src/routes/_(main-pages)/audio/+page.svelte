<script lang="ts">
	import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

	interface AudioPageProps {
		audios: any
	}

	export let data
	let { audios }: AudioPageProps = data
</script>

<h1>(Sick animation to create the title)</h1>
<p>And heeeere they are:</p>
{#each audios as audio (audio.title)}
	<ProjectInfoCard {...audio} />
{/each}

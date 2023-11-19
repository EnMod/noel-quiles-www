<script lang="ts">
	import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

	interface WritingPageProps {
		writings: any
	}

	export let data
	let { writings }: WritingPageProps = data
</script>

<h1>(Sick animation to create the title)</h1>
<p>And heeeere they are:</p>
{#each writings as writing (writing.title)}
	<ProjectInfoCard {...writing} />
{/each}
<p>Let's test out some <a href="#0">links</a></p>

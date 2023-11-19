<script lang="ts">
	import ProjectInfoCard from '$lib/components/project-info-card/index.svelte'

	interface WebsitePageProps {
		websites: any
	}

	export let data
	let { websites }: WebsitePageProps = data
</script>

<h1>(Sick animation to create the title)</h1>
<p>And heeeere they are:</p>
{#each websites as website (website.title)}
	<ProjectInfoCard {...website} />
{/each}
<p>Let's test out some <a href="#0">links</a></p>

<script lang="ts">
	interface AboutPageProps {
		content: any
	}

	export let data
	let { content }: AboutPageProps = data
</script>

<h1>(Sick animation to create the title)</h1>
<p>About: {content}</p>
<p>Let's test out some <a href="#0">links</a></p>

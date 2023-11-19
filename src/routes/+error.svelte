<div class="container">
	<h1>Unfortunately that page isn't ready yet.</h1>
	<div>
		<p>
			This site is undergoing a major overhaul, and I&apos;m <em>doing it live</em>
			starting with
			<a href="/blog">my blog</a>!
		</p>
		<p>
			Follow along in <a href="/blog/a-new-start">my first new blog post</a>, updated as I go. Or
			check out
			<a href="#TODO-actually-make-the-PR">the PR on GitHub</a>!
		</p>
	</div>
</div>

<style lang="postcss">
	.container {
		--gap: 3rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100vh;
		width: 100%;

		transition: 0.25s ease;
		transition-property: color, border-color, background-color;

		background-color: var(--background-color);
		color: var(--text-color);
	}

	.details {
		margin-top: 32px;
	}

	p {
		margin-top: 0;
		margin-bottom: 8px;
	}
</style>

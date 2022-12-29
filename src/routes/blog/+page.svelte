<script lang="ts">
  import { base as basePath } from '$app/paths'

  interface BlogIndexPageProps {
    posts: Array<{
      title: string
      excerpt: any
      slug: string
    }>
  }

  export let data
  let { posts }: BlogIndexPageProps = data
</script>

<div>Hero!</div>
<div>Filters?</div>
<div>Featured?</div>
<div class="blog-index">
  <h1>Blog here</h1>
  {#each posts as post}
    <a href={`${basePath}/blog/${post.slug}`}>{post.title}</a><br />
  {/each}
  <p>That's {posts.length} posts!</p>
</div>

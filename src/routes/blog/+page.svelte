<script lang="ts">
  import BlogImage from '$lib/components/blog/image/index.svelte'

  interface BlogIndexPageProps {
    posts: Array<{
      title: any
      excerpt: any
    }>
  }

  export let data
  let { posts }: BlogIndexPageProps = data
</script>

<div class="blog-index">
  <h1>Blog here</h1>
  <BlogImage image={{ url: 'https://placekitten.com/400/400' }} caption="This is a caption" />
  {#each posts as post}
    <p>{post.title}</p>
  {/each}

  <p>That's {posts.length} posts!</p>
</div>

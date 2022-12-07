<script lang="ts">
  import BlogBody from '$lib/components/blog-body/index.svelte'

  export let data

  let { title, body } = data
</script>

<div class="blog-post">
  <h1>{title}</h1>
  <BlogBody {body} />
</div>

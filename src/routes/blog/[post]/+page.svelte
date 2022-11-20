<script lang="ts">
  import { render as renderStructuredText } from 'datocms-structured-text-to-html-string'

  export let data

  let { title, body } = data
</script>

<div class="blog-post">
  <h1>{title}</h1>
  {@html renderStructuredText(body)}
</div>

<script lang="ts">
  interface ContentPageProps {
    content: any
  }

  export let data
  let { content }: ContentPageProps = data
</script>

<h1>(Sick animation to create the title)</h1>
<p>Contact info: {content}</p>

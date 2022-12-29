<script lang="ts">
  import StructuredText from 'svelte-datocms/StructuredText/StructuredText.svelte'
  import BlogVideo from './components/video.svelte'
  import BlogImage from './components/image.svelte'
  import SectionHeading from './components/section-heading.svelte'

  // TODO Type this
  export let data

  let { title, body } = data
</script>

<div class="blog-post">
  <h1>{title}</h1>
  <StructuredText
    data={body}
    components={{
      SectionHeadingRecord: SectionHeading,
      ImageRecord: BlogImage,
      VideoRecord: BlogVideo
    }}
  />
</div>

<style lang="postcss">
  .blog-post {
    & :global(p) {
      line-height: 1.6;
    }

    & :global(ul) {
      margin: 0;
      padding-left: 24px;

      & :global(li) {
        & :global(p) {
          margin: 0;
        }
      }
    }

    & :global(pre) {
      display: inline-block;
      white-space: normal;
      margin: 0;
      background-color: var(--qi-1);
      padding: 4px;
      border-radius: 2px;
      line-height: 1;
    }

    & :global(a) {
      & :global(pre) {
        text-decoration: underline;
      }
    }
  }
</style>

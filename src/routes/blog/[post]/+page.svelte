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
    max-width: calc(var(--sz-l-01) * 10);
    margin: 0 auto;

    & :global(p) {
      line-height: 1.6;
    }

    & :global(ul) {
      margin: 0;
      padding-left: var(--sz-m-01);

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
      background-color: var(--text-highlight-color);
      padding: var(--sz-s-02);
      border-radius: var(--sz-s-01);
      line-height: 1;
    }

    & :global(a) {
      & :global(pre) {
        text-decoration: underline;
      }
    }
  }
</style>

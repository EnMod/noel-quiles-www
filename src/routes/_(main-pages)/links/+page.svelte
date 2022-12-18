<script lang="ts">
  interface LinksPageProps {
    linkCategories: Array<{
      title: string
      theme: { title: string }
      links: Array<{
        title: string
        href: string
        target: string
      }>
    }>
  }

  export let data
  let { linkCategories }: LinksPageProps = data
</script>

<!-- HTML -->
<h1>(Sick animation to create the title)</h1>
<p>Links</p>
{#each linkCategories as category (category.title)}
  <section class="link-category {category.theme}">
    <h2 class="category-title">{category.title}</h2>
    <ul class="link-list">
      {#each category.links as link (link.title)}
        <a
          class="link"
          href={link.href}
          {...link.target === 'external' ? { rel: 'noopener', target: '_blank' } : {}}
          >{link.title}</a
        >
      {/each}
    </ul>
  </section>
{/each}

<style lang="postcss">
  .link-category {
    /* Styles TBD */
    /* TODO Figure out how to share the theme styles and apply them as utility classes */
  }

  .category-title {
    /* Styles TBD */
  }

  .link-list {
    /* Styles TBD */
  }

  .link {
    /* Styles TBD */
  }
</style>

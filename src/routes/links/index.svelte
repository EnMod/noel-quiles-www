<script lang="ts" context="module">
  import query from './query'
  import { mainGqlr } from '$lib/utils/gql-request'

  export async function load() {
    const { linkCategories } = await mainGqlr(query)
    return { props: { linkCategories } }
  }
</script>

<script lang="ts">
  export let linkCategories
</script>

<div class="links-page">
  <h1>(Sick animation to create the title)</h1>
  <p>And heeeere they are:</p>

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
</div>

<style lang="postcss">
  .links-page {
    /* Maybe nothing here? We'll see */
  }

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

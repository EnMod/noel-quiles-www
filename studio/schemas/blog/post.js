export default {
  title: 'Blog post',
  name: 'blogPost',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title' }
    },
    { title: 'Publish date', name: 'releaseDate', type: 'date' },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogCategory' }] }]
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Include excerpt',
      name: 'includeExcerpt',
      type: 'boolean'
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ]
}

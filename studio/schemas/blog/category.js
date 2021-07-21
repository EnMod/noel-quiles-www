export default {
  title: 'Blog category',
  name: 'blogCategory',
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
    }
    // ...more?
  ]
}

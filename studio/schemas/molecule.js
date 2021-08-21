export default {
  title: 'Molecule',
  name: 'molecule',
  type: 'document',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'icon'
    },
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
    {
      title: 'Atoms',
      name: 'atoms',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'atom' }] }]
    },
    { title: 'Subheading', name: 'subheading', type: 'array', of: [{ type: 'block' }] },
    { title: 'Page copy', name: 'pageCopy', type: 'array', of: [{ type: 'block' }] },
    { title: 'Concept', name: 'concept', type: 'text' },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ]
}

export default {
  title: 'Basic Project',
  name: 'basicProject',
  type: 'document',
  fields: [
    {
      title: 'Molecule',
      name: 'molecule',
      type: 'reference',
      to: [{ type: 'molecule' }]
    },
    {
      title: 'Showcase',
      name: 'showcase',
      type: 'array',
      of: [{ type: 'showcaseItem' }]
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url'
    },
    {
      title: 'Description',
      name: 'description',
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

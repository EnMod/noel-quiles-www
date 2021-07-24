export default {
  title: 'Basic Project',
  name: 'basicProject',
  type: 'document',
  fields: [
    {
      title: 'Discipline',
      name: 'discipline',
      type: 'reference',
      to: [{ type: 'discipline' }]
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

export default {
  title: 'Client Project',
  name: 'clientProject',
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
      title: 'Client',
      name: 'client',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}

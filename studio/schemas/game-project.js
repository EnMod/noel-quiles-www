export default {
  title: 'Game Project',
  name: 'gameProject',
  type: 'document',
  fields: [
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
    { title: 'Release date', name: 'releaseDate', type: 'date' },
    {
      title: 'Platform(s)',
      name: 'platform',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' }
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}

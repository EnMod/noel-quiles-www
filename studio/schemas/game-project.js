import basicProject from './basic-project'

export default {
  title: 'Game Project',
  name: 'gameProject',
  type: 'document',
  fields: [
    ...basicProject.fields,
    { title: 'Release date', name: 'releaseDate', type: 'date' },
    {
      title: 'Platform(s)',
      name: 'platform',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' }
    }
  ]
}

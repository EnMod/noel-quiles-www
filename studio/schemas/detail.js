import icon from './icon'

export default {
  title: 'Detail',
  name: 'detail',
  type: 'document',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'icon',
      ...icon.fields
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
    { title: 'Description', name: 'description', type: 'array', of: [{ type: 'block' }] }
  ]
}

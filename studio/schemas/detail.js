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
    { title: 'Subheading', name: 'subheading', type: 'array', of: [{ type: 'block' }] },
    { title: 'Page copy', name: 'pageCopy', type: 'array', of: [{ type: 'block' }] }
  ]
}

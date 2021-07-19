export default {
  title: 'Icon',
  name: 'icon',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    }
  ],
  options: { accept: 'image/*,.jpg,.png' }
}

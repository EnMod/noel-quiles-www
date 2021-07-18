export default {
  title: "Discipline",
  name: "discipline",
  type: "document",
  fields: [
    {
      title: "Icon",
      name: "icon",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
      options: { accept: "image/*,.jpg,.png" },
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    { title: "Description", name: "description", type: "text" },
    { title: "Concept", name: "concept", type: "text" },
  ],
}

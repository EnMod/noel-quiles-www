export default {
  title: "Basic Project",
  name: "basicProject",
  type: "document",
  fields: [
    {
      title: "Discipline",
      name: "discipline",
      type: "reference",
      to: [{ type: "discipline" }],
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Showcase",
      name: "showcase",
      type: "array",
      of: [{ type: "showcaseItem" }],
    },
  ],
}

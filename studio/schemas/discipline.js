import detail from "./detail"

export default {
  title: "Discipline",
  name: "discipline",
  type: "document",
  fields: [
    ...detail.fields,
    { title: "Concept", name: "concept", type: "text" },
  ],
}

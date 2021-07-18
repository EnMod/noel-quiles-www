import basicProject from "./basic-project";

export default {
  title: "Client Project",
  name: "clientProject",
  type: "document",
  fields: [
    {
      title: "Client",
      name: "client",
      type: "string",
    },
    ...basicProject.fields,
  ],
}

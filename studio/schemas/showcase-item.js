export default {
  title: "Detail",
  name: "detail",
  type: "object",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Files",
      name: "files",
      type: "array",
      of: [
        {
          type: "file",
          options: { accept: "image/*,audio/*,video/*,.jpg,.png,.mp3,.ogg" },
        },
      ],
    },
  ],
}

// TODO Make this a proper graphql file at some point
export default `
query WebsitesPageQuery {
  allWebsites {
    title
    url
    client
    description
    showcase {
      files {
        url
        alt
        mimeType
      }
    }
  }
}
`

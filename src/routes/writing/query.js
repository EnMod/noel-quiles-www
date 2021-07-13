// TODO Make this a proper graphql file at some point
export default `
query WebsitesPageQuery {
  allWritings {
    title
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

// TODO Make this a proper graphql file at some point
export default `
query AudioPageQuery {
  allAudios {
    title
    description
    showcase {
      ...showcaseItemFields
    }
  }
}
`

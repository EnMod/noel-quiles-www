// TODO Make this a proper graphql file at some point
export default `
query LinksPageQuery {
  linkCategories: allLinkCategories {
    title
    theme { title }
    links {
      ... on LinkRecord {
        title
        href
        target
      }
    }
  }
}
`

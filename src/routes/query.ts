// TODO Make this a proper graphql file at some point
export default `
query HomePage {
  molecules: allMolecules {
    title
    slug
    image {
      url
      alt
    }
    atoms {
      title
    }
  }
}
`

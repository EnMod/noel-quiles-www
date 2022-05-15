// TODO Make this a proper graphql file at some point
export default `
query Nav {
  molecules: allMolecules {
    title
    slug
  }
}
`

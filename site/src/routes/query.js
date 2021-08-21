// TODO Make this a proper graphql file at some point
export default `
query HomePage {
  molecules: allMolecule(sort: [ {order: ASC } ]) {
    title
    slug { current }
    icon {
      caption
    }
    atoms {
      title
    }
  }
}
`
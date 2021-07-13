// TODO Make this a proper graphql file at some point
export default `
query HomePage {
  disciplines: allDisciplines {
    title
    material
    image {
      alt
      url
    }
  }

  details: allDetails {
    title
    image {
      alt
      url
    }
  }
}
`
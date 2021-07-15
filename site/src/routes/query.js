// TODO Make this a proper graphql file at some point
export default `
query HomePage {
  disciplines: allDisciplines {
    title
    material
    theme
    image {
      alt
      url
    }
  }

  details: allDetails {
    title
    theme
    image {
      alt
      url
    }
  }
}
`
// TODO Make this a proper graphql file at some point
export default `
query HomePage {
  disciplines: allDiscipline {
    title
    icon {
      alt
      url
    }
  }

  details: allDetail {
    title
    icon {
      alt
      url
    }
  }
}
`
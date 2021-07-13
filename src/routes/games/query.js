// TODO Make this a proper graphql file at some point
export default `
query GamesPageQuery {
  allGames {
    title
    description
    url
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
// TODO Make this a proper graphql file at some point
import showcaseItemFields from '$lib/components/project-info-card/showcase-item/fragment'

export default `
query GamesPageQuery {
  games: allGameProject(sort: [ {releaseDate: DESC } ]) {
    title
    description
    url
    discipline {
      slug
    }
    showcase {
      ${showcaseItemFields}
    }
  }
}
`
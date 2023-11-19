// TODO Make this a proper graphql file at some point
import showcaseItemFields from '$lib/components/project-info-card/showcase-item/fragment'

export default `
query GamesPageQuery {
  games: allProjects(filter: {molecule: {eq: "1928075"}}) {
    title
    description { value }
    url
    showcase {
      ${showcaseItemFields}
    }
  }
}
`

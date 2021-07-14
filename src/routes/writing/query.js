// TODO Make this a proper graphql file at some point
import showcaseItemFields from '$lib/components/project-info-card/showcase-item/fragment'

export default `
query WebsitesPageQuery {
  allWritings {
    title
    description
    showcase {
      ${showcaseItemFields}
    }
  }
}
`

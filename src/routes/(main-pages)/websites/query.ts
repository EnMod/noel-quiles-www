// TODO Make this a proper graphql file at some point
import showcaseItemFields from '$lib/components/project-info-card/showcase-item/fragment'

export default `
query WebsitesPageQuery {
  websites: allProjects(filter: {molecule: {eq: "1928079"}}) {
    client
    title
    description { value }
    url
    molecule {
      slug
    }
    showcase {
      ${showcaseItemFields}
    }
  }
}
`

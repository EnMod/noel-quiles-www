// TODO Make this a proper graphql file at some point
import showcaseItemFields from '$lib/components/project-info-card/showcase-item/fragment'

export default `
query WritingPageQuery {
  writings: allProjects(filter: {molecule: {eq: "1928078"}}) {
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

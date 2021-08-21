// TODO Make this a proper graphql file at some point
import showcaseItemFields from '$lib/components/project-info-card/showcase-item/fragment'

export default `
query WritingPageQuery {
  writings: allBasicProject(where: {molecule: {slug: {eq: "writing"}}}) {
    title
    description
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

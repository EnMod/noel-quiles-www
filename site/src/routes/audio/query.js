// TODO Make this a proper graphql file at some point
import showcaseItemFields from '$lib/components/project-info-card/showcase-item/fragment'

export default `
query AudioPageQuery {
  audio: allBasicProject(where: {molecule: {slug: {eq: "audio"}}}) {
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

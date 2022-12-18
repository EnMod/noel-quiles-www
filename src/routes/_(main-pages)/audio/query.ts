// TODO Make this a proper graphql file at some point
import showcaseItemFields from '$lib/components/project-info-card/showcase-item/fragment'

export default `
query AudioPageQuery {
  audios: allProjects(filter: {molecule: {eq: "1928053"}}) {
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

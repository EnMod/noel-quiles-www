// TODO Make this a proper graphql file at some point
export default `
query BlogIndexPage($slug: String) {
  postData: post(filter: { slug: { eq: $slug }, _status: { eq: published } }) {
    id
    title
    slug
    body { 
      value
      blocks {
        __typename
        ... on ImageRecord {
          id
          image {
            alt
            url
          }
          caption
          imagePosition
        }
        ... on VideoRecord {
          id
          url
        }
        ... on SectionHeadingRecord {
          id
          level
          text
          hash
        }
      }
    }
    _status
  }

  allPosts {
    slug
  }
}
`

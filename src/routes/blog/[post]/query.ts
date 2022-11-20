// TODO Make this a proper graphql file at some point
export default `
query BlogIndexPage($slug: String) {
  postData: post(filter: { slug: { eq: $slug }, _status: { eq: published } }) {
    id
    title
    slug
    body { value }
    _status
  }

  allPosts {
    slug
  }
}
`

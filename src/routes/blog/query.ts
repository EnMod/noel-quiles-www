// TODO Make this a proper graphql file at some point
export default `
query BlogIndexPage {
  allPosts {
    id
    title
    slug
    excerpt { value }
    _status
  }
}
`

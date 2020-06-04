import "./style.css"
import fetchFromCms from "../../lib/cmsClient"
import query from "./query.graphql"

function WritingPage({ pageData }) {
  return <div id="p-writing">Writing page</div>
}

export async function getStaticProps() {
  const { pageData } = await fetchFromCms(query)

  return {
    props: {
      pageData
    }
  }
}

export default WritingPage

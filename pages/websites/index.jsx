import "./style.css"
import fetchFromCms from "../../lib/cmsClient"
import query from "./query.graphql"

function WebsitesPage({ pageData }) {
  return <div id="p-websites">Websites page</div>
}

export async function unstable_getStaticProps() {
  const { pageData } = await fetchFromCms(query)

  return {
    props: {
      pageData
    }
  }
}

export default WebsitesPage

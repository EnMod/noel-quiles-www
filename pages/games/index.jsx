import "./style.css"
import fetchFromCms from "../../lib/cmsClient"
import query from "./query.graphql"

function GamesPage({ pageData }) {
  return <div id="p-games">Games page</div>
}

export async function getStaticProps() {
  const { pageData } = await fetchFromCms(query)

  return {
    props: {
      pageData
    }
  }
}

export default GamesPage

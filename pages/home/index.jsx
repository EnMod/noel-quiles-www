import "./style.css"
import fetchFromCms from "../../lib/cmsClient"
import PageIconLink from "../../components/PageIconLink"
import query from "./query.graphql"

function HomePage({ disciplines, details }) {
  return (
    <div id="p-home">
      <h1 className="headline">I'm Noel Quiles, and</h1>
      <div className="manifesto g-text-hero">I connect to create.</div>
      <div className="link-row">
        {disciplines.map(discipline => (
          <PageIconLink key={discipline.title} {...discipline} />
        ))}
      </div>
      <div className="link-row">
        {details.map(detail => (
          <PageIconLink key={detail.title} {...detail} />
        ))}
      </div>
    </div>
  )
}

export async function unstable_getStaticProps() {
  const { disciplines, details } = await fetchFromCms(query)

  return {
    props: {
      disciplines,
      details
    }
  }
}

export default HomePage

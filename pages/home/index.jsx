import "./style.css"
import fetchFromCms from "../../lib/cmsClient"
import PageIconLink from "../../components/PageIconLink"
import query from "./query.graphql"

function HomePage({ pageLinks }) {
  return (
    <div id="p-home">
      <h1 className="headline">I'm Noel Quiles, and</h1>
      <div className="manifesto g-text-hero">I connect to create.</div>
      <div className="links">
        {pageLinks.map(link => (
          <PageIconLink key={link.title} {...link} />
        ))}
      </div>
    </div>
  )
}

export async function unstable_getStaticProps() {
  const { disciplines, details } = await fetchFromCms(query)

  return {
    props: {
      pageLinks: [...disciplines, ...details]
    }
  }
}

export default HomePage

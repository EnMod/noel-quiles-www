import "./style.css"
import fetchFromCms from "../lib/cmsClient"
import DisciplineLink from "../../components/DisciplineLink"
import query from "./query.graphql"

export default function HomePage({ disciplines }) {
  return (
    <div id="p-home">
      <h1 className="headline">I'm Noel Quiles, and</h1>
      <div className="manifesto g-text-hero">I connect to create.</div>
      <div className="disciplines">
        {disciplines.map(discipline => (
          <DisciplineLink {...discipline} />
        ))}
      </div>
    </div>
  )
}

export async function unstable_getStaticProps() {
  const { allDisciplines } = await fetchFromCms(query)

  return {
    props: {
      disciplines: allDisciplines
    }
  }
}

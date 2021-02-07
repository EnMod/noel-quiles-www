import s from './style.module.css'
import fetchFromCms from '../../lib/cmsClient'
import query from './query.graphql'
import ProjectInfoCard from '../../components/project-info-card'

function WritingPage({ allWritings }) {
  return (
    <div className={s.writing}>
      <h1>Writing</h1>
      <p>And heeeere they are:</p>
      {allWritings.map((writing) => (
        <ProjectInfoCard key={writing.title} {...writing} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const { allWritings } = await fetchFromCms(query)

  return {
    props: {
      allWritings
    }
  }
}

export default WritingPage

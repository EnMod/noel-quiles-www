import s from './style.module.css'
import fetchFromCms from '../../lib/cmsClient'
import query from './query.graphql'
import ProjectInfoCard from '../../components/project-info-card'

function AudioPage({ allAudios }) {
  return (
    <div className={s.audio}>
      <h1>Audio</h1>
      <p>And heeeere they are:</p>
      {allAudios.map((audio) => (
        <ProjectInfoCard key={audio.title} {...audio} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const { allAudios } = await fetchFromCms(query)

  return {
    props: {
      allAudios
    }
  }
}

export default AudioPage

import s from './style.module.css'
import fetchFromCms from '../../lib/cmsClient'
import query from './query.graphql'
import ProjectInfoCard from '../../components/project-info-card'

function WebsitesPage({ allWebsites }) {
  return (
    <div className={s.websites}>
      <h1>Websites</h1>
      <p>And heeeere they are:</p>
      {allWebsites.map((website) => (
        <ProjectInfoCard key={website.title} {...website} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const { allWebsites } = await fetchFromCms(query)

  return {
    props: {
      allWebsites
    }
  }
}

export default WebsitesPage

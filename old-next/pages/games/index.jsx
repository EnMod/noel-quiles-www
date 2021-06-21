import s from './style.module.css'
import fetchFromCms from '../../lib/cmsClient'
import query from './query.graphql'
import ProjectInfoCard from '../../components/project-info-card'

function GamesPage({ allGames }) {
  return (
    <div className={s.games}>
      <h1>Games</h1>
      <p>And heeeere they are:</p>
      {allGames.map((game) => (
        <ProjectInfoCard key={game.title} {...game} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const { allGames } = await fetchFromCms(query)

  return {
    props: {
      allGames
    }
  }
}

export default GamesPage

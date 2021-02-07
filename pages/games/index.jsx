import s from './style.module.css'

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

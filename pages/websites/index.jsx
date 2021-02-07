import s from './style.module.css'

function WebsitesPage({ pageData }) {
  return <div id="p-websites">Websites page</div>
}

export async function getStaticProps() {
  const { pageData } = await fetchFromCms(query)

  return {
    props: {
      pageData
    }
  }
}

export default WebsitesPage

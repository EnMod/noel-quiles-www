import s from './style.module.css'

function AudioPage({ pageData }) {
  return <div id="p-audio">Audio page</div>
}

export async function getStaticProps() {
  const { pageData } = await fetchFromCms(query)

  return {
    props: {
      pageData
    }
  }
}

export default AudioPage

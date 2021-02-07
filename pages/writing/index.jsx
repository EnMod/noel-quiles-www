import s from './style.module.css'

function WritingPage({ pageData }) {
  return <div id="p-writing">Writing page</div>
}

export async function getStaticProps() {
  const { pageData } = await fetchFromCms(query)

  return {
    props: {
      pageData
    }
  }
}

export default WritingPage

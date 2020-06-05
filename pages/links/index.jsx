import './style.css'
import fetchFromCms from '../../lib/cmsClient'
import query from './query.graphql'

function LinksPage({ links }) {
  return (
    <div id="p-links">
      <h1 className="headline">Links</h1>
      <ul>
        {links.map((link) => (
          <li key={link.url} className="link">
            <a href={link.url}>
              <button>{link.title}</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const { allLinks } = await fetchFromCms(query)

  return {
    props: {
      links: allLinks,
    },
  }
}

LinksPage.layout = 'BareLayout'

export default LinksPage

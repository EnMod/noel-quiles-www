import s from './style.module.css'
import fetchFromCms from '../../lib/cmsClient'
import PageIconLink from '../../components/page-icon-link'
import query from './query.graphql'

function HomePage({ pageLinks }) {
  return (
    <div className={s.home}>
      <h1 className={s.headline}>I&apos;m Noel Quiles, and</h1>
      <div className={s.manifesto + ' g-text-hero'}>I connect to create.</div>
      <div className={s.links}>
        {pageLinks.map((link) => (
          <PageIconLink key={link.title} {...link} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { disciplines, details } = await fetchFromCms(query)

  return {
    props: {
      pageLinks: [...disciplines, ...details]
    }
  }
}

export default HomePage

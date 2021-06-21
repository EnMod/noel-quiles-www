import s from './style.module.css'
import Link from 'next/link'

export default function PageIconLink({ image, title }) {
  const pageSlug = title.toLowerCase()

  return (
    <div className={s.pageIconLink}>
      <img src={image.url} alt={image.alt} />

      <Link href={`/${pageSlug}`}>
        <a>
          <div className={s.title + ' ' + s[pageSlug]}>
            <span>{title}</span>
          </div>
        </a>
      </Link>
    </div>
  )
}

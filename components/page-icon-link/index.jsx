import "./style.css"
import Link from "next/link"

export default function PageIconLink({ image, title }) {
  const pageSlug = title.toLowerCase()

  return (
    <div className="g-page-icon-link">
      <img src={image.url} alt={image.alt} />

      <Link href={`/${pageSlug}`}>
        <a>
          <div className={`title ${pageSlug}`}>
            <span>{title}</span>
          </div>
        </a>
      </Link>
    </div>
  )
}

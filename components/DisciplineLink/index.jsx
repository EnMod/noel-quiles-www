import "./style.css"
import Link from "next/link"

export default function DisciplineLink({ image, title }) {
  const disciplineSlug = title.toLowerCase()

  return (
    <div className="g-discipline-link">
      <Link href={`/${disciplineSlug}`}>
        <a>
          <picture>
            <source srcSet={image.url} alt={image.alt} />
            <img src={image.url} alt={image.alt} />
          </picture>
          <div className={`title ${disciplineSlug}`}>
            <span>{title}</span>
          </div>
        </a>
      </Link>
    </div>
  )
}

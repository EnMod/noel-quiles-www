import "./style.css"
import Link from "next/link"

export default function DisciplineLink({ image, title }) {
  const disciplineSlug = title.toLowerCase()

  return (
    <div className="g-discipline-link">
      <img src={image.url} alt={image.alt} />

      <Link href={`/${disciplineSlug}`}>
        <a>
          <div className={`title ${disciplineSlug}`}>
            <span>{title}</span>
          </div>
        </a>
      </Link>
    </div>
  )
}

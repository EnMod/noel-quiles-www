import s from './style.module.css'
import Image from 'next/image'

export default function ProjectInfoCard({
  title,
  description,
  client,
  url,
  showcase
}) {
  return (
    <div key={title} className={s.projectInfo}>
      <div className={s.showcase}>
        {showcase.map(({ files }, index) => (
          // Stable index, don't worry about it
          <ShowcaseItem key={index} files={files} />
        ))}
      </div>
      <h2>{url ? <a href={url}>{title}</a> : title}</h2>
      {client ? <h3>{client}</h3> : null}
      <p>{description}</p>
    </div>
  )
}

function ShowcaseItem({ files }) {
  const mimeCategory = files[0].mimeType.split('/')[0]
  switch (mimeCategory) {
    case 'audio':
      return (
        // TODO Maybe apply some video-specific CSS here
        <audio controls>
          <MediaJSX type="audio" files={files} />
        </audio>
      )
    case 'video':
      return (
        // TODO Maybe apply some video-specific CSS here
        <video controls>
          <MediaJSX type="video" files={files} />
        </video>
      )
    case 'image':
      return (
        <figure>
          {files.map(({ url, mimeType }) => (
            // ? Might throw in srcSet here later idk
            <source key={url} src={url} type={mimeType} />
          ))}
          <Image
            src={files[0].url}
            alt={files[0].alt || 'Project image'}
            width="100"
            height="100"
          />
        </figure>
      )
  }
}

function MediaJSX({ type, files }) {
  return (
    <>
      {files.map(({ url, mimeType }) => (
        <source key={url} src={url} type={mimeType} />
      ))}
      <p>
        Unfortunately your browser doesn&apos;t support this {type} embed.
        Here&apos;s a{' '}
        <a href={files[0].url} title="Direct {type} link">
          link to the {type}
        </a>{' '}
        instead!
      </p>
    </>
  )
}

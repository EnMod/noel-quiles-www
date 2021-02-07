// TODO: Create a proper nav
import React from 'react'
import Link from 'next/link'
import s from './style.module.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/websites', label: 'Websites' },
  { href: '/games', label: 'Games' },
  { href: '/audio', label: 'Audio' },
  { href: '/writing', label: 'Writing' }
]

const Nav = () => (
  <nav className={s.nav}>
    <ul>
      {links.map(({ href, label }) => (
        <li key={label}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav

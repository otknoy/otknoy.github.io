import * as React from 'react'

import { Logo } from '../atoms/Logo'
import { LinkText } from '../atoms/LinkText'

const style = {
  display: 'flex',
  justifyContent: 'space-between',
}

const navStyle = {
  listStyle: 'none',
}

const listStyle = {
  padding: '4px',
  display: 'inline-block',
}

type Props = {
  title: string
  links: Array<{ title: string; url: string }>
}

const Header = ({ title, links }: Props) => (
  <header style={style}>
    <Logo>{title}</Logo>

    <ul style={navStyle}>
      {links.map((link, i) => (
        <li key={i} style={listStyle}>
          <LinkText href={link.url}>{link.title}</LinkText>
        </li>
      ))}
    </ul>
  </header>
)

export default Header

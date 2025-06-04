import * as React from 'react'
import styles from './Header.module.css';

import { Logo } from '../atoms/Logo'
import { LinkText } from '../atoms/LinkText'

interface Props {
  title: string
  links: { title: string; url: string }[]
}

const Header = ({ title, links }: Props) => (
  <header className={styles.header}>
    <Logo>{title}</Logo>

    <ul className={styles.navList}>
      {links.map((link, i) => (
        <li key={i} className={styles.navItem}>
          <LinkText href={link.url}>{link.title}</LinkText>
        </li>
      ))}
    </ul>
  </header>
)

export default Header

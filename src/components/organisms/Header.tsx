import * as React from 'react'

import { Logo } from '../atoms/Logo'
import { LinkText } from '../atoms/Text'

const style = {
  display: 'flex',
  justifyContent: 'space-between'
}

const navStyle = {
  listStyle: 'none'
}

const listStyle = {
  padding: '4px',
  display: 'inline-block'
}

const Menu: React.FC = () => (
  <div>
    <ul style={navStyle}>
      <li style={listStyle}>
        <LinkText href="https://github.com/otknoy">github</LinkText>
      </li>
      <li style={listStyle}>
        <LinkText href="https://twitter.com/otknoy">twitter</LinkText>
      </li>
      <li style={listStyle}>
        <LinkText href="https://otknoy.hatenablog.com">blog</LinkText>
      </li>
    </ul>
  </div>
)

const Header: React.FC = () => (
  <header style={style}>
    <Logo></Logo>
    <Menu></Menu>
  </header>
)

export default Header

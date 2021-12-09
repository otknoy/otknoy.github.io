import React from 'react'

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

const Header = () => (
  <header style={style}>
    <Logo>Naoya Otsuka</Logo>

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
  </header>
)

export default Header

import * as React from 'react'

import { Logo } from '../atoms/Logo'
import { LinkText } from '../atoms/Text'

const style = {
  display: 'flex',
  justifyContent: 'space-between'
}

const Menu: React.SFC = () => (
  <div>
    <ul>
      <li>
        <LinkText href="https://github.com/otknoy">github</LinkText>
      </li>
      <li>
        <LinkText href="https://twitter.com/otknoy">twitter</LinkText>
      </li>
      <li>
        <LinkText href="https://otknoy.hatenablog.com">blog</LinkText>
      </li>
    </ul>
  </div>
)

const Header: React.SFC = () => (
  <header style={style}>
    <Logo></Logo>
    <Menu></Menu>
  </header>
)

export default Header

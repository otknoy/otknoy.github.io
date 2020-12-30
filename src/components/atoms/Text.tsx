import * as React from 'react'

const Text: React.SFC = ({ children }) => (
  <span style={{ fontSize: '16px' }}>{children}</span>
)

type LinkProps = {
  href: string,
}

const LinkText: React.SFC<LinkProps> = ({ href, children }) => (
  <a href={href}>
    <Text>{children}</Text>
  </a>
)

export { Text, LinkText }

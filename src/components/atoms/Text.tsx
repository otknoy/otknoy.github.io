import React from 'react'

const Text: React.FC = ({ children }) => (
  <span style={{ fontSize: '16px' }}>{children}</span>
)

type LinkProps = {
  href: string,
}

const LinkText: React.FC<LinkProps> = ({ href, children }) => (
  <a href={href}>
    <Text>{children}</Text>
  </a>
)

export { Text, LinkText }

import React from 'react'

const Text: React.FC = ({ children }) => (
  <span style={{ fontSize: '16px' }}>{children}</span>
)

type Props = {
  href: string,
}

const LinkText: React.FC<Props> = ({ href, children }) => (
  <a href={href}>
    <Text>{children}</Text>
  </a>
)

export { Text, LinkText }

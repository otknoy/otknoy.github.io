import React from 'react'

const Text: React.FC = ({ children }) => (
  <span style={{ fontSize: '16px' }}>{children}</span>
)

type Props = {
  href: string
  children: React.ReactNode
}

const LinkText = ({ href, children }: Props) => (
  <a href={href}>
    <Text>{children}</Text>
  </a>
)

export { Text, LinkText }

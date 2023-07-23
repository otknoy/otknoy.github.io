import React from 'react'

import { Text } from './Text'

interface Props {
  href: string
  children: React.ReactNode
}

const LinkText = ({ href, children }: Props) => (
  <a href={href}>
    <Text>{children}</Text>
  </a>
)

export { LinkText }

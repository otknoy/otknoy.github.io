import React from 'react'

type Props = {
  children: React.ReactNode
}

const Text = ({ children }: Props) => (
  <span style={{ fontSize: '16px' }}>{children}</span>
)

export { Text }

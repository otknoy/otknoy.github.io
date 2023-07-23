import React from 'react'

interface Props {
  children: React.ReactNode
}

const Text = ({ children }: Props) => (
  <span style={{ fontSize: '16px' }}>{children}</span>
)

export { Text }

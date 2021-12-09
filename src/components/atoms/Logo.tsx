import React from 'react'

type Props = {
  children: React.ReactNode
}

const Logo = ({ children }: Props) => (
  <h1 style={{ fontSize: '24px' }}>{children}</h1>
)

export { Logo }

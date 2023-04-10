import React from 'react'

type Props = {
  children: React.ReactNode
}

const SectionTitle = ({ children }: Props) => (
  <h1 style={{ fontSize: '22px' }}>{children}</h1>
)

const SubSectionTitle = ({ children }: Props) => (
  <h1 style={{ fontSize: '28px' }}>{children}</h1>
)

export { SectionTitle, SubSectionTitle }

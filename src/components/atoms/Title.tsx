import React from 'react'

type props = {
  fontSize: string
}

const Title: React.FC<props> = ({ fontSize, children }) => {
  const style = {fontSize}
  return <h1 style={style}>{children}</h1>
}

const SectionTitle: React.FC = ({ children }) => <Title fontSize='22px'>{children}</Title>
const SubSectionTitle: React.FC = ({ children }) => <Title fontSize='18px'>{children}</Title>

export { SectionTitle, SubSectionTitle }

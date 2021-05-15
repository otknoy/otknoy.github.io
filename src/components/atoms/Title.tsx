import * as React from 'react'

type props = {
  fontSize: string
}

const Title: React.SFC<props> = ({ fontSize, children }) => {
  const style = {fontSize}
  return <h1 style={style}>{children}</h1>
}

const SectionTitle: React.SFC = ({ children }) => <Title fontSize='22px'>{children}</Title>
const SubSectionTitle: React.SFC = ({ children }) => <Title fontSize='18px'>{children}</Title>

export { SectionTitle, SubSectionTitle }

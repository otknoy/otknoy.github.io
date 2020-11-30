import * as React from 'react'

const PageTitle: React.FC = ({ children }) => {
  const style = {
    fontSize: '28px',
  }
  return <h1 style={style}>{children}</h1>
}

const SectionTitle: React.FC = ({ children }) => {
  const style = {
    fontSize: '22px',
  }
  return <h1 style={style}>{children}</h1>
}

export { PageTitle, SectionTitle }

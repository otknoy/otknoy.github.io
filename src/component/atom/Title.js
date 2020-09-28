import React from 'react'

const PageTitle = ({ children }) => {
  const style = {
    fontSize: '28px',
  }
  return <h1 style={style}>{children}</h1>
}

const SectionTitle = ({ children }) => {
  const style = {
    fontSize: '22px',
  }
  return <h1 style={style}>{children}</h1>
}

export { PageTitle, SectionTitle }

import * as React from 'react'

const SectionTitle: React.SFC = ({ children }) => {
  const style = {
    fontSize: '22px',
  }
  return <h1 style={style}>{children}</h1>
}

export { SectionTitle }

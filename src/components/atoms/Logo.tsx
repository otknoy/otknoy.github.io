import React from 'react'

const Logo: React.FC = ({ children }) => {
  const style = {
    fontSize: '24px'
  }
  return <h1 style={style}>{children}</h1>
}

export { Logo }

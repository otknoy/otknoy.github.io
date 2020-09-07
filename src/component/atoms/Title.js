import React from 'react'

const PageTitle = ({children}) => {
  const style = {
    margin: '0px',
    padding: '4px',
    fontSize: '28px'
  }
  return (
      <h1 style={style}>{children}</h1>
  )
}

export {
  PageTitle
}


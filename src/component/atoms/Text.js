import React from 'react'

const Text = ({children}) => (
    <span style={{fontSize: '16px'}}>{children}</span>
)

const LinkText = ({href, children}) => <a href={href}><Text>{children}</Text></a>

export {
  Text,
  LinkText
}

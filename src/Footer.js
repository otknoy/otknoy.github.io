import React from "react"
import styled from 'styled-components'

const Wrapper = styled.footer`
text-align: center;
margin-top: auth;
`

const Text = styled.h1`
  margin: 0px;
  padding: 4px;
  font-size: 16px;
`

export default function Footer() {
  return (
      <Wrapper>
        <Text>(C) 1988-2020 Naoya Otsuka</Text>
      </Wrapper>
  )
}

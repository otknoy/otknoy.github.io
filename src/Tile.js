import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
height: 192px;
background-color: #efefef;
padding: auto;
`

const Text = styled.div`
background-color: #9f9f9f;
text-align: center;
margin: auto;
width: 128px;
height: 128px;
`

const Tile = ({href, children}) => (
    <Wrapper>
      <a href={href}><Text>{children}</Text></a>
    </Wrapper>
)

export default Tile

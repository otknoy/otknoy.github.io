import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;

width: auto;
height: 192px;
background-color: #efefef;
`

const Text = styled.p`
width: 128px;
line-height: 128px;
margin: 0;
text-align: center;
background-color: #9f9f9f;
`

const Tile = ({link, children}) => (
    <Section>
      <a href={link}>
        <Text>{children}</Text>
      </a>
    </Section>
)

export default Tile

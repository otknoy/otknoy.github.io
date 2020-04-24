import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
width: auto;
height: 192px;
background-color: #efefef;
`

const Container = styled.div`
margin: auto;
width: 128px;
line-height: 128px;
`

const Text = styled.p`
margin: 0;
text-align: center;
background-color: #9f9f9f;
`

const Tile = ({link, children}) => (
    <Wrapper>
      <Container>
        <a href={link}>
          <Text>{children}</Text>
        </a>
      </Container>
    </Wrapper>
)

export default Tile

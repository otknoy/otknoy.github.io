import React from 'react'

import Header from './Header'
import Tile from './Tile'
import Footer from './Footer'

const Page = () => (
    <>
      <Header />
    
      <div>
        <Tile link="https://twitter.com/otknoy">twitter</Tile>
        <Tile link="https://github.com/otknoy/">github</Tile>
        <Tile link="https://otknoy.hatenablog.com/">blog</Tile>
      </div>

      <Footer />
    </>
)

export default Page

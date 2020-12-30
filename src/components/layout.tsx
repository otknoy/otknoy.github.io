import * as React from 'react'

import Header from './organisms/Header'
import Footer from './organisms/Footer'

const Layout: React.SFC = ({ children }) =>  (
  <>
    <Header />

    {children}

    <Footer />
  </>
)

export default Layout

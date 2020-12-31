import * as React from 'react'

import styles from './templates.module.css'

import Header from './organisms/Header'
import Footer from './organisms/Footer'

const Template: React.SFC = ({ children }) =>  (
  <div className={styles.container}>
    <Header />

    {children}

    <Footer />
  </div>
)

export default Template

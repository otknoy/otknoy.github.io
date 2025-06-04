import * as React from 'react'
import styles from './page.module.css';
import { profile, skills } from '../lib/data';

import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import Profile from '../components/organisms/Profile'
import Skills from '../components/organisms/Skills'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <Header title={profile.name} links={profile.links}></Header>

        <Profile jobTitle="web engineer, architect" />
        <Skills skills={skills} />

        <Footer />

      </div>
    </div>
  )
}

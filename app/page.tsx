import Link from 'next/link'

import styles from './page.module.css'

const skills = [
  {
    title: 'Backend & Architecture',
    items: [
      'Java',
      'Spring Boot',
      'Go',
      'Python',
      'Kotlin',
      'Microservices',
    ],
  },
  {
    title: 'Data & Messaging',
    items: [
      'Solr',
      'Redis',
      'Cassandra',
      'Kafka',
      'Pulsar',
      'MySQL',
    ],
  },
  {
    title: 'Platform & Observability',
    items: [
      'Docker',
      'Kubernetes',
      'Prometheus',
      'Alertmanager',
      'Grafana',
    ],
  },
  {
    title: 'Research Interests',
    items: [
      'Information Retrieval',
      'Exploratory Search',
      'Human-Computer Interaction',
    ],
  },
]

const links = [
  { label: 'GitHub', href: 'https://github.com/otknoy' },
  { label: 'X / Twitter', href: 'https://twitter.com/otknoy' },
]

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">
          NO<span>.</span>
        </Link>
        <nav aria-label="メインナビゲーション">
          <Link href="/blog">Blog</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <h1>
          Naoya
          <br />
          Otsuka<span>.</span>
        </h1>
        <p className={styles.intro}>Web Engineer / Architect</p>
        <div className={styles.status}>
          <span aria-hidden="true" />
          Osaka, Japan
        </div>
      </section>

      <section className={styles.section} aria-labelledby="profile-title">
        <div className={styles.sectionHeading}>
          <h2 id="profile-title">Profile</h2>
        </div>
        <div className={styles.profileCopy}>
          <p>主にバックエンド開発に従事する Web エンジニア</p>
          <p>
            アーキテクチャ設計や情報検索、Human-Computer Interaction に興味がある
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="skills-title">
        <div className={styles.sectionHeading}>
          <h2 id="skills-title">Skills</h2>
        </div>
        <div className={styles.skillGrid}>
          {skills.map((skill, index) => (
            <article className={styles.skillCard} key={skill.title}>
              <span>0{index + 1}</span>
              <h3>{skill.title}</h3>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Links</h2>
        </div>
        <div className={styles.linkList}>
          {links.map((link) => (
            <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <span>{`© ${new Date().getFullYear()} Naoya Otsuka`}</span>
        <Link href="/blog">Read the blog →</Link>
      </footer>
    </main>
  )
}

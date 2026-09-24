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

// Brand marks from Simple Icons: https://github.com/simple-icons/simple-icons
const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/otknoy',
    iconPath:
      'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/otknoy',
    iconPath:
      'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z',
  },
]

export default function Home() {
  return (
    <main className="pageContainer">
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
            <a
              href={link.href}
              key={link.label}
              aria-label={link.label}
              title={link.label}
              rel="noreferrer"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={link.iconPath} />
              </svg>
            </a>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <span>{`© ${new Date().getFullYear()} Naoya Otsuka`}</span>
        <Link href="/blog">
          Read the blog
          <span className="linkArrow" aria-hidden="true">
            →
          </span>
        </Link>
      </footer>
    </main>
  )
}

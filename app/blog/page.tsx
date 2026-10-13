import type { Metadata } from 'next'
import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { formatDate, getAllPosts } from '../../lib/blogs'
import styles from './blog.module.css'

export const metadata: Metadata = {
  title: 'Blog | Naoya Otsuka',
  description: 'ソフトウェア設計、検索技術、日々の開発についての記録。',
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <main className={`pageContainer ${styles.page}`}>
      <Header activeBlog />
      <section className={styles.title}>
        <h1>Blog.</h1>
        <p>技術メモ。</p>
      </section>

      {posts.length > 0 ? (
        <ol className={styles.postList}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </div>
                <span
                  className={`linkArrow ${styles.arrow}`}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p className={styles.empty}>記事はまだありません。</p>
      )}
      <Footer />
    </main>
  )
}

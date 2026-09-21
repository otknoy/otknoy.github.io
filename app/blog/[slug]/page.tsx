import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Markdown from '../../../components/Markdown'
import { formatDate, getAllPosts, getPost } from '../../../lib/blogs'
import styles from '../blog.module.css'

interface Props {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.slug }))

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  return post
    ? { title: `${post.title} | Naoya Otsuka`, description: post.description }
    : {}
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) notFound()

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/blog">← Blog</Link>
        <Link href="/">Naoya Otsuka</Link>
      </header>
      <article>
        <header className={styles.articleHeader}>
          <h1>{post.title}</h1>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <p>{post.description}</p>
        </header>
        <div className={styles.article}>
          <Markdown source={post.content} />
        </div>
      </article>
    </main>
  )
}

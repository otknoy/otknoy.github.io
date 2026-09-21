import fs from 'node:fs'
import path from 'node:path'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  content: string
}

const blogDirectory = path.join(process.cwd(), 'content', 'blog')

const parseFrontMatter = (source: string) => {
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(source)

  if (!match) throw new Error('Blog posts must start with front matter')

  const metadata = Object.fromEntries(
    match[1].split('\n').map((line) => {
      const separator = line.indexOf(':')
      const key = line.slice(0, separator).trim()
      const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '')
      return [key, value]
    })
  )

  return { metadata, content: match[2].trim() }
}

export const getAllPosts = (): BlogPost[] => {
  if (!fs.existsSync(blogDirectory)) return []

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const source = fs.readFileSync(path.join(blogDirectory, file), 'utf8')
      const { metadata, content } = parseFrontMatter(source)

      if (!metadata.title || !metadata.date || !metadata.description) {
        throw new Error(`${file} is missing required front matter`)
      }

      return {
        slug: file.replace(/\.md$/, ''),
        title: metadata.title,
        description: metadata.description,
        date: metadata.date,
        content,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export const getPost = (slug: string) =>
  getAllPosts().find((post) => post.slug === slug)

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  }).format(new Date(`${date}T00:00:00+09:00`))

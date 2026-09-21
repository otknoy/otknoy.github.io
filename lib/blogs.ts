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
const blogFilenamePattern = /^(\d{4})(\d{2})(\d{2})_([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/

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
      const filename = blogFilenamePattern.exec(file)

      if (!filename) {
        throw new Error(
          `${file} must follow the YYYYMMDD_title.md naming convention`
        )
      }

      const source = fs.readFileSync(path.join(blogDirectory, file), 'utf8')
      const { metadata, content } = parseFrontMatter(source)

      if (!metadata.title || !metadata.date || !metadata.description) {
        throw new Error(`${file} is missing required front matter`)
      }

      const filenameDate = `${filename[1]}-${filename[2]}-${filename[3]}`
      if (metadata.date !== filenameDate) {
        throw new Error(`${file} date must match its front matter date`)
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

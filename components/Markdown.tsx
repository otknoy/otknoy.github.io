import type { ReactNode } from 'react'

const inline = (text: string): ReactNode[] => {
  const pattern = /(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g

  return text.split(pattern).map((part, index) => {
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
    if (link) {
      return (
        <a href={link[2]} key={index} rel="noreferrer" target="_blank">
          {link[1]}
        </a>
      )
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index}>{part.slice(1, -1)}</code>
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function Markdown({ source }: { source: string }) {
  return source.split(/\n\n+/).map((block, index) => {
    if (block.startsWith('### ')) {
      return <h3 key={index}>{inline(block.slice(4))}</h3>
    }
    if (block.startsWith('## ')) {
      return <h2 key={index}>{inline(block.slice(3))}</h2>
    }
    if (block.startsWith('```') && block.endsWith('```')) {
      const [firstLine, ...rest] = block.split('\n')
      return (
        <pre key={index} data-language={firstLine.slice(3)}>
          <code>{rest.slice(0, -1).join('\n')}</code>
        </pre>
      )
    }
    if (block.split('\n').every((line) => line.startsWith('- '))) {
      return (
        <ul key={index}>
          {block.split('\n').map((line) => (
            <li key={line}>{inline(line.slice(2))}</li>
          ))}
        </ul>
      )
    }
    return <p key={index}>{inline(block.replace(/\n/g, ' '))}</p>
  })
}

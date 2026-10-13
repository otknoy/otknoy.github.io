import Link from 'next/link'

import styles from './Header.module.css'

interface Props {
  activeBlog?: boolean
}

export default function Header({ activeBlog = false }: Props) {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">
        No.
      </Link>
      <nav aria-label="メインナビゲーション">
        <Link href="/blog" aria-current={activeBlog ? 'true' : undefined}>
          Blog
        </Link>
      </nav>
    </header>
  )
}

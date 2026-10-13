import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import Header from './Header'

afterEach(cleanup)

describe('Header', () => {
  test('provides home and blog navigation', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'No.' }).getAttribute('href')).toBe(
      '/',
    )
    const blogLink = screen.getByRole('link', { name: 'Blog' })
    expect(blogLink.getAttribute('href')).toBe('/blog')
    expect(blogLink.hasAttribute('aria-current')).toBe(false)
  })

  test('marks the blog section as current on blog pages', () => {
    render(<Header activeBlog />)

    expect(
      screen.getByRole('link', { name: 'Blog' }).getAttribute('aria-current'),
    ).toBe('true')
  })
})

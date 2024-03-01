import { describe, test, expect, vi } from 'vitest'
import { render } from '@testing-library/react'

import Footer from './Footer'

const { useDateNowMock } = vi.hoisted(() => {
  return {
    useDateNowMock: vi.fn()
  }
})
vi.mock('../../hooks/date', () => ({
  useDateNow: useDateNowMock
}))


describe('render <Footer />', () => {
  test.each([
    {
      now: new Date('Thu Dec 30 2025 22:51:56 GMT+0900 (Japan Standard Time)'),
      expected: '1988-2025',
    },
    {
      now: new Date('2025/12/30 22:51:56'),
      expected: '1988-2025',
    },
  ])('valid year $now $expected', ({ now, expected }) => {
    useDateNowMock.mockReturnValue(now)

    render(<Footer />)

    expect(document.querySelector('footer h1').textContent).toContain(expected)
  })
})


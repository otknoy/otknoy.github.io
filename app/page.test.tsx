import { afterEach, beforeEach, test, describe, expect, vi } from 'vitest'
import { render } from '@testing-library/react'

import Home from './page'

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2025-01-01'))
})

afterEach(() => {
  vi.useRealTimers()
})

describe('render <Home />', () => {
  test('snapshot', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})

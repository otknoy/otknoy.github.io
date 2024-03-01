import { test, describe, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import * as React from 'react'

import Home from './page'

vi.useFakeTimers()
vi.setSystemTime(new Date('2025-01-01'))

describe('render <Home />', () => {
  test('snapshot', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})

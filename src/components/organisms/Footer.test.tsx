import * as React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'
import { useDateNow } from '../../hooks/date'

jest.mock('../../hooks/date')

describe('render <Footer />', () => {
  test.each([
    {
      now: new Date('Thu Dec 30 2025 22:51:56 GMT+0900 (Japan Standard Time)'),
      expected: '1988-2025'
    },
    {
      now: new Date('2025/12/30 22:51:56'),
      expected: '1988-2025'
    }
  ])('valid year $now $expected', ({ now, expected }) => {
    ;(useDateNow as jest.Mock).mockImplementation(() => now)

    render(<Footer />)

    screen.getByText(new RegExp(expected))
  })
})

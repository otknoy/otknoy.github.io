import * as React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'
import { useDateNow } from '../../hooks/date'

jest.mock('../../hooks/date')

describe('render <Footer />', () => {
  test('valid year', () => {
    ;(useDateNow as jest.Mock).mockImplementation(
      () => new Date('Thu Dec 30 2025 22:51:56 GMT+0900 (Japan Standard Time)')
    )

    render(<Footer />)

    screen.getByText(/2025/)
  })
})

import * as React from 'react'

import * as renderer from 'react-test-renderer'
import { jest, test, expect, describe } from '@jest/globals'

import Home from './index.page'

jest.useFakeTimers()
jest.setSystemTime(new Date('2025-01-01'))

describe('render <Home />', () => {
  test('snapshot', () => {
    const tree = renderer.create(<Home />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

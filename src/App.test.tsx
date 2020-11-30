import * as React from 'react'
import * as renderer from 'react-test-renderer'

import App from './App'
import { jest, test, expect, describe } from '@jest/globals'

jest.useFakeTimers('modern')
jest.setSystemTime(new Date('2025-01-01'))

describe('render <App />', () => {
  test('snapshot', () => {
    const tree = renderer.create(<App />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

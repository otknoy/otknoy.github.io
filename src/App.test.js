import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

describe('render <App />', () => {
  const OriginalDate = Date
  jest.spyOn(global, 'Date').mockImplementation((arg) => {
    return arg ? new OriginalDate(arg) : new Date('2025-01-01')
  })

  test('snapshot', () => {
    const tree = renderer.create(<App />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

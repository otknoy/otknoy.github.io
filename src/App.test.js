import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

describe('render <App />', () => {
  test('snapshot', () => {
    const tree = renderer.create(<App />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

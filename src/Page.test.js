import React from 'react'
import renderer from 'react-test-renderer'

import Page from './Page'

describe('render <Page />', () => {
  test('snapshot', () => {
    const tree = renderer
	  .create(<Page />)
	  .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

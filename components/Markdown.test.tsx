import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Markdown from './Markdown'

describe('render <Markdown />', () => {
  test('renders a GFM table', () => {
    render(
      <Markdown
        source={`| Name | Type |
| --- | --- |
| Solr | Search |`}
      />
    )

    expect(screen.getByRole('table')).not.toBeNull()
    expect(screen.getByRole('columnheader', { name: 'Name' })).not.toBeNull()
    expect(screen.getByRole('cell', { name: 'Solr' })).not.toBeNull()
  })
})

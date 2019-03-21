/* eslint-env jest */

import React from 'react'
import { render } from 'react-testing-library'

import Item from '../../components/Item'
import data from './item'

describe('With React Testing Library', () => {
  it('Shows "postor"', () => {
    const { getByText } = render(<Item data={data}/>)

    expect(getByText('postor')).not.toBeNull()
  })
})


describe('With React Testing Library Snapshot', () => {
  it('Should match Snapshot', () => {
    const { asFragment } = render(<Item data={data} />)

    expect(asFragment()).toMatchSnapshot()
  })
})

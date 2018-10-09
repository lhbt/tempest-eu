import React from 'react'
import { shallow } from 'enzyme'
import Icon from '.'

const wrap = (props = {}) => shallow(<Icon icon="logo" {...props} />)

it('renders with different combination of props', () => {
  wrap({ height: '40' })
})

it('renders props when passed in', () => {
  const wrapper = wrap({ viewBox: '0 0 20 20' })
  expect(wrapper.find({ viewBox: '0 0 20 20' })).toHaveLength(1)
})

it('renders className when passed in', () => {
  const wrapper = wrap({ className: 'foo' })
  expect(wrapper.hasClass('foo')).toEqual(true)
})

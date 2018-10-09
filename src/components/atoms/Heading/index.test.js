import React from 'react'
import { shallow } from 'enzyme'
import Heading from '.'

const wrap = (props = {}) => shallow(<Heading {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders className when passed in', () => {
  const wrapper = wrap({ className: 'foo' })
  expect(wrapper.hasClass('foo')).toEqual(true)
})

it('renders h1 by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('h1')).toHaveLength(1)
})

it('renders hLevel when level is passed in', () => {
  const wrapper = wrap({ level: 2 })
  expect(wrapper.find('h2')).toHaveLength(1)
})

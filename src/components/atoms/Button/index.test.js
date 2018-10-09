import React from 'react'
import { shallow } from 'enzyme'
import Button from '.'

const wrap = (props = {}) => shallow(<Button {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'Test button' })
  expect(wrapper.contains('Test button')).toBe(true)
})

it('renders className when passed in', () => {
  const wrapper = wrap({ className: 'foo' })
  expect(wrapper.hasClass('foo')).toEqual(true)
})

it('renders modifier classes when props are passed in', () => {
  const wrapper = wrap({ primary: true })
  expect(wrapper.find('.button--primary')).toHaveLength(1)
})

it('renders button by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('button')).toHaveLength(1)
})

it('renders a when prop to is passed in', () => {
  const wrapper = wrap({ href: '#' })
  expect(wrapper.find('a')).toHaveLength(1)
})

it('renders Link when prop to is passed in', () => {
  const wrapper = wrap({ to: 'test' })
  expect(wrapper.find('NavLink')).toHaveLength(1)
})

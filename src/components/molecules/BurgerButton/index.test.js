import React from 'react'
import { shallow } from 'enzyme'
import BurgerButton from '.'

const wrap = (props = {}) => shallow(<BurgerButton {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders className when passed in', () => {
  const wrapper = wrap({ className: 'foo' })
  expect(wrapper.hasClass('foo')).toEqual(true)
})

it('renders active class when passed in', () => {
  const wrapper = wrap({ isActive: true })
  expect(wrapper.find('.burger-button--active')).toHaveLength(1)
})

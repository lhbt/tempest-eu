import React from 'react'
import { shallow } from 'enzyme'
import Input from '.'

const wrap = (props = {}) => shallow(<Input {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'text' })
  expect(wrapper.find({ type: 'text' })).toHaveLength(1)
})

it('renders className when passed in', () => {
  const wrapper = wrap({ className: 'foo' })
  expect(wrapper.hasClass('foo')).toEqual(true)
})

it('renders input by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('input')).toHaveLength(1)
})

it('renders select when type is select', () => {
  const wrapper = wrap({ type: 'select' })
  expect(wrapper.find('select')).toHaveLength(1)
})

it('renders textarea when type is textarea', () => {
  const wrapper = wrap({ type: 'textarea' })
  expect(wrapper.find('textarea')).toHaveLength(1)
})

it('renders modifier classes when props are passed in', () => {
  const wrapper = wrap({ disabled: true })
  expect(wrapper.find('.form-input--disabled')).toHaveLength(1)
})

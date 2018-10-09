import React from 'react'
import { shallow } from 'enzyme'
import LazyImage from '.'

const wrap = (props = {}) => shallow(<LazyImage {...props} />)

it('renders with default props', () => {
  const wrapper = wrap()
  expect(wrapper.find({ 'data-src': 'http://via.placeholder.com/800x600' })).toHaveLength(1)
})

it('renders className when passed in', () => {
  const wrapper = wrap({ className: 'foo' })
  expect(wrapper.hasClass('foo')).toEqual(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ src: 'foo' })
  expect(wrapper.find({ src: 'foo' })).toHaveLength(1)
})

it('renders srcset when passed in', () => {
  const srcSet = 'foo.png 200w, bar.png 400w'
  const wrapper = wrap({ dataSrcSet: srcSet })
  expect(wrapper.find({ 'data-srcset': srcSet })).toHaveLength(1)
})

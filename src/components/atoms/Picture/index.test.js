import React from 'react'
import { shallow } from 'enzyme'
import Picture from '.'

const wrap = (props = {}) => shallow(<Picture {...props} />)

it('renders with default props', () => {
  const wrapper = wrap()
  expect(wrapper.find('picture')).toHaveLength(1)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders LazyImage by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('LazyImage')).toHaveLength(1)
})

it('renders img when lazyload is false', () => {
  const wrapper = wrap({ lazyload: false })
  expect(wrapper.find('img')).toHaveLength(1)
})

it('renders multiple sources when passed in', () => {
  const wrapper = wrap({
    sources: [
      {
        id: 'foo',
        src: 'http://via.placeholder.com/1024x100',
        media: '(min-width: 769px)',
      },
      {
        id: 'bar',
        src: 'http://placehold.it/768x100',
        media: '(min-width: 661px) and (max-width: 768px)',
      },
      {
        id: 'baz',
        src: 'http://placehold.it/660x100',
        media: '(max-width: 660px)',
      },
    ],
  })
  expect(wrapper.find('source')).toHaveLength(3)
})

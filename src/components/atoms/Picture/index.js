import React from 'react'
import PropTypes from 'prop-types'

import LazyImage from '../../atoms/LazyImage'

const Picture = ({
  sources,
  src,
  alt,
  lazyload,
  ...props
}) => {
  let Image = null
  if (lazyload) {
    Image = <LazyImage dataSrc={src} alt={alt} />
  } else {
    Image = <img src={src} alt={alt} />
  }

  return (
    <picture {...props}>
      {
        sources.map(source => <source key={source.id} srcSet={source.src} media={source.media} />)
      }
      {Image}
    </picture>
  )
}

Picture.propTypes = {
  sources: PropTypes.arrayOf(PropTypes.object).isRequired,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  lazyload: PropTypes.bool,
}

Picture.defaultProps = {
  sources: [
    {
      id: 'desktop',
      src: 'http://via.placeholder.com/716x442',
      media: '(min-width: 661px)',
    },
    {
      id: 'mobile',
      src: 'http://placehold.it/660x182',
      media: '(max-width: 660px)',
    },
  ],
  alt: '',
  lazyload: true,
}

export default Picture

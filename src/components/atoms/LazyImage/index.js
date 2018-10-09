import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.scss'

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

if (canUseDOM) {
  require('lazysizes')
}

const LazyImage = ({
  src,
  alt,
  dataSizes,
  dataSrc,
  dataSrcSet,
  className,
  ...props
}) => {
  const imageClasses = classNames('lazyload', className).trim()

  return (
    <img
      src={src}
      alt={alt}
      data-src={dataSrc}
      data-sizes={dataSizes}
      data-srcset={dataSrcSet || undefined}
      className={imageClasses}
      {...props}
    />
  )
}

LazyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  dataSizes: PropTypes.string,
  dataSrc: PropTypes.string,
  dataSrcSet: PropTypes.string,
  className: PropTypes.string,
}

LazyImage.defaultProps = {
  alt: '',
  dataSrc: 'http://via.placeholder.com/800x600',
  dataSizes: 'auto',
}

export default LazyImage

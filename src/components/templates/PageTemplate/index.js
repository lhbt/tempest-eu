import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.scss'

const PageTemplate = ({
  className,
  header,
  footer,
  children,
  ...props
}) => {
  const pageClasses = classNames('site-main', className)

  return (
    <div {...props}>
      {header}
      <main className={pageClasses}>
        {children}
      </main>
      {footer}
    </div>
  )
}

PageTemplate.propTypes = {
  className: PropTypes.string,
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageTemplate

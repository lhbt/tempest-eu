import React from 'react'
import PropTypes from 'prop-types'
import NavLink from 'react-router-dom/NavLink'
import classNames from 'classnames'

import './styles.scss'

const Button = ({
  className,
  children,
  primary,
  secondary,
  inactive,
  ...props
}) => {
  const buttonClasses = classNames('button', className, {
    'button--primary': primary,
    'button--secondary': !primary && secondary, // so defaultProps doesn't break the class
    'button--inactive': inactive,
  })

  if (props.to) {
    return <NavLink className={buttonClasses} {...props}>{children}</NavLink>
  }
  if (props.href) {
    return <a className={buttonClasses} {...props}>{children}</a>
  }
  return <button className={buttonClasses} {...props}>{children}</button>
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  to: PropTypes.string,
  selected: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  inactive: PropTypes.bool,
}

Button.defaultProps = {
  children: 'Example Button',
  secondary: true,
}

export default Button

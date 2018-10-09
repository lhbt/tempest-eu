import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.scss'

const Input = ({
  className,
  invalid,
  validated,
  ...props
}) => {
  const componentClasses = classNames('form-input', className, {
    [`form-input--${props.type}`]: props.type,
    'form-input--invalid': invalid,
    'form-input--validated': validated,
    'form-input--disabled': props.disabled,
  })

  if (props.type === 'textarea') {
    return <textarea className={componentClasses} {...props} />
  } else if (props.type === 'select') {
    return <select className={componentClasses} {...props} />
  }
  return <input className={componentClasses} {...props} />
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  invalid: PropTypes.bool,
  validated: PropTypes.bool,
  disabled: PropTypes.bool,
}

Input.defaultProps = {
  name: 'name',
  type: 'text',
}

export default Input

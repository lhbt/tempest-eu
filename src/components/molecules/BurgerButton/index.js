import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.scss'

const BurgerButton = ({ className, ...props }) => {
  const buttonClasses = classNames('burger-button', className, {
    'burger-button--active': props.isActive,
  })

  return (
    <button className={buttonClasses} {...props}>
      <span className="burger-button__text">Mobile Menu</span>
    </button>
  )
}

BurgerButton.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
}

export default BurgerButton

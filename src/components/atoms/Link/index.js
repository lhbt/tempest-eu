import React from 'react'
import PropTypes from 'prop-types'
import NavLink from 'react-router-dom/NavLink'

import './styles.scss'

const Link = ({ children, ...props }) => {
  if (props.to) {
    return <NavLink {...props}>{children}</NavLink>
  }
  return <a {...props}>{children}</a>
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

export default Link

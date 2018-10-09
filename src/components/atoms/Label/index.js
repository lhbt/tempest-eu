import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ children, ...props }) =>
  React.createElement('label', props, children)

Label.propTypes = {
  children: PropTypes.node,
  props: PropTypes.shape({
    htmlFor: PropTypes.string.isRequired,
  }),
}

export default Label

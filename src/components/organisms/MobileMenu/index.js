import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

import Overlay from '../../molecules/Overlay'
import PrimaryNav from '../../molecules/PrimaryNav'

const MobileMenu = ({ openButton }) => {
  return (
    <Overlay openButton={openButton}>
      <PrimaryNav className="mobile-menu__nav" />
    </Overlay>
  )
}

MobileMenu.propTypes = {
  openButton: PropTypes.any.isRequired,
}

export default MobileMenu

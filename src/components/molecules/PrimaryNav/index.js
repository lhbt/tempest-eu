import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.scss'

import Link from '../../atoms/Link'

const PrimaryNav = ({
  className,
}) => {
  const navClasses = classNames('primary-nav', className)

  return (
    <nav className={navClasses}>
      <ul className="primary-nav__list">
        <li className="primary-nav__item">
          <Link className="primary-nav__link" href="http://www.tempest-guild.co.uk/forum">Forum</Link>
        </li>
        <li className="primary-nav__item">
          <Link className="primary-nav__link" to="/roster">Roster</Link>
        </li>
        <li className="primary-nav__item">
          <Link className="primary-nav__link" to="/recruitment">Recruitment</Link>
        </li>
        <li className="primary-nav__item">
          <Link className="primary-nav__link" to="/marks-drawings">{'The guild\'s drawings'}</Link>
        </li>
      </ul>
    </nav>
  )
}

PrimaryNav.propTypes = {
  className: PropTypes.string,
}

PrimaryNav.defaultProps = {}

export default PrimaryNav

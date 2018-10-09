import React from 'react'

import './styles.scss'

import Link from '../../atoms/Link'
import PrimaryNav from '../../molecules/PrimaryNav'
import BurgerButton from '../../molecules/BurgerButton'
import MobileMenu from '../../organisms/MobileMenu'

const MobileMenuButton = props => <BurgerButton className="site-header__burger" {...props} />

const Header = () => (
  <header className="site-header">
    <div className="site-header__inner">
      <Link to="/">
        <img
          src="/media/images/tempest-logo.svg"
          alt="Tempest EU"
          className="site-header__logo"
        />
      </Link>
      <PrimaryNav className="site-header__nav" />
      <MobileMenu openButton={MobileMenuButton} />
    </div>
  </header>
)

export default Header

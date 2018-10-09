import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.scss'

import Heading from '../../atoms/Heading'
import Player from '../../molecules/Player'

const RosterCategory = ({
  className,
  category,
  ...props
}) => {
  const componentClasses = classNames('roster-category', className)

  return (
    <div className={componentClasses} {...props}>
      <Heading level={3}>{category.name}</Heading>
      {category.players.map((player) => {
        return (
          <Player
            playerName={player.name}
            playerNationality={player.nationality}
            playerClass={player.main}
          />
        )
      })}
    </div>
  )
}

RosterCategory.propTypes = {
  className: PropTypes.string,
  category: PropTypes.object,
}

RosterCategory.defaultProps = {}

export default RosterCategory

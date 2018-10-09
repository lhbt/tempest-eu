import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.scss'

const Player = ({
  playerName,
  playerClass,
  playerNationality,
  className,
  ...props
}) => {
  const componentClasses = classNames('player', className)
  const playerNameClass = `player__name ${playerClass}`
  return (
    <div className={componentClasses} {...props}>
      <img
        className="player__flag"
        src={`/media/icons/${playerNationality.toLowerCase()}.svg`}
        alt={playerNationality}
      />
      <p className={playerNameClass}>{playerName}</p>
    </div>
  )
}

Player.propTypes = {
  className: PropTypes.string,
  playerName: PropTypes.string,
  playerClass: PropTypes.string,
  playerNationality: PropTypes.string,
}

Player.defaultProps = {
  playerName: 'Yuki',
  playerClass: 'warlock',
  playerNationality: 'FR',
}

export default Player

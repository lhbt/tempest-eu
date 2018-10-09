import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import './styles.scss'

import Portal from '../../atoms/Portal'
import Icon from '../../atoms/Icon'

class Overlay extends Component {
  constructor() {
    super()

    this.handleOpenClick = this.handleOpenClick.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)

    this.state = {
      showOverlay: false,
    }
  }

  handleOpenClick() {
    this.setState({
      showOverlay: true,
    })
  }

  handleCloseClick() {
    this.setState({
      showOverlay: false,
    })
  }

  render() {
    const OpenButton = this.props.openButton

    return (
      <React.Fragment>
        <OpenButton onClick={this.handleOpenClick} />
        <Portal>
          <Transition
            in={!!this.state.showOverlay}
            timeout={50}
            mountOnEnter
            unmountOnExit
          >
            {
              status => (
                <div key="0" className={`overlay overlay--${status}`}>
                  <header className="overlay__header">
                    <button className="overlay__close" onClick={this.handleCloseClick}>
                      <Icon
                        className="overlay__close__icon"
                        icon="cross"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        transform="translate(2 2)"
                      />
                      Close
                    </button>
                  </header>
                  <div className="overlay__content">
                    {this.props.children}
                  </div>
                </div>
              )
            }
          </Transition>
        </Portal>
      </React.Fragment>
    )
  }
}

Overlay.propTypes = {
  openButton: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
}

export default Overlay

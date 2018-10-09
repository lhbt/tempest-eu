import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch() {
    // Display fallback UI
    this.setState({ hasError: true })

    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p>Something went wrong</p>
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
}

export default ErrorBoundary
